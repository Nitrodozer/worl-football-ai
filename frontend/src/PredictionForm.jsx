import React, { useState } from 'react';
import axios from 'axios';

function PredictionForm() {
  const [formData, setFormData] = useState({
    team_strength: '',
    opponent_strength: '',
    recent_form: '',
    goals_scored: '',
    goals_conceded: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://worl-football-ai.onrender.com/predict', formData);
      setResult(res.data.prediction);
    } catch (err) {
      setResult("Fehler bei der Vorhersage");
    }
  };

  return (
    <div>
      <h2>Fußballspiel-Vorhersage</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input type="number" name={key} value={formData[key]} onChange={handleChange} required />
          </div>
        ))}
        <button type="submit">Vorhersagen</button>
      </form>
      {result !== null && <h3>Vorhersage: {result}</h3>}
    </div>
  );
}

export default PredictionForm;
