from fastapi import FastAPI
from pydantic import BaseModel
import xgboost as xgb
import numpy as np
import pickle
import os

app = FastAPI()

# Modell laden
model_path = os.path.join(os.path.dirname(__file__), '..', 'models', 'xgboost_model.pkl')
try:
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
except Exception as e:
    model = None
    print("Modell konnte nicht geladen werden:", e)

class MatchData(BaseModel):
    team_strength: float
    opponent_strength: float
    recent_form: float
    goals_scored: int
    goals_conceded: int

@app.post("/predict")
def predict(data: MatchData):
    if model is None:
        return {"error": "Modell nicht geladen"}
    input_data = np.array([[data.team_strength, data.opponent_strength, data.recent_form, data.goals_scored, data.goals_conceded]])
    prediction = model.predict(input_data)
    return {"prediction": int(prediction[0])}
