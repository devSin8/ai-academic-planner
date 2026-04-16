# AI Academic Planner MVP

A simple MERN-style MVP that proves this idea: AI can generate a day-wise study plan and save the generated tasks for a student.

## Folder structure

```text
backend/
  controllers/
    planController.js
    taskController.js
  models/
    Task.js
  routes/
    index.js
  .env.example
  package.json
  server.js
frontend/
  src/
    api/
      api.js
    components/
      Dashboard.jsx
      StudyPlan.jsx
      TaskList.jsx
    pages/
      Home.jsx
      Planner.jsx
      Tasks.jsx
    App.jsx
    index.css
    main.jsx
  .env.example
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
```

## Backend setup

1. Install MongoDB locally and start the MongoDB service.
2. Open a terminal in `backend`.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Add your OpenAI API key in `.env`.
6. Run `npm run dev`.

The backend runs on `http://localhost:5000`.

## Frontend setup

1. Open another terminal in `frontend`.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Run `npm run dev`.

The frontend runs on the Vite URL shown in the terminal, usually `http://localhost:5173`.

## API endpoints

```text
POST /generate-plan
GET /tasks
POST /tasks/update
```

## Example generate request

```json
{
  "subject": "Data Structures",
  "numberOfTopics": 12,
  "deadline": "2026-05-15"
}
```

## Environment variables

Backend:

```text
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/ai-academic-planner
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
```

Frontend:

```text
VITE_API_URL=http://localhost:5000
```
