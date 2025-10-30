# World Football AI

Dieses Projekt sagt Fußballergebnisse weltweit voraus mithilfe von XGBoost und FastAPI + React.

## 🔧 Setup

### Voraussetzungen
- GitHub-Konto
- Render.com (für Backend)
- Vercel.com (für Frontend)

### 📦 Projektstruktur
- `backend/`: FastAPI Backend mit XGBoost-Vorhersage
- `frontend/`: React Webinterface
- `config/api_config.py`: API-Football Key
- `render.yaml`: Deployment-Konfiguration für Render
- `vercel.json`: Deployment-Konfiguration für Vercel

## 🚀 Deployment

### Backend auf Render.com
1. Gehe zu [https://render.com](https://render.com)
2. Neues Web Service erstellen
3. GitHub-Repo verbinden
4. `render.yaml` wird automatisch erkannt

### Frontend auf Vercel.com
1. Gehe zu [https://vercel.com](https://vercel.com)
2. Neues Projekt erstellen
3. GitHub-Repo verbinden
4. `vercel.json` wird automatisch erkannt

## 🔑 API-Key
Der API-Football Key ist in `config/api_config.py` gespeichert.
