import React from "react";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Planner from "./pages/Planner.jsx";
import Tasks from "./pages/Tasks.jsx";

function App() {
  const [page, setPage] = useState("home");
  const [plan, setPlan] = useState([]);

  function handlePlanGenerated(newPlan) {
    setPlan(newPlan);
    setPage("planner");
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "planner", label: "Planner" },
    { id: "tasks", label: "Tasks" }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setPage("home")}
            className="text-left text-xl font-bold text-gray-950"
          >
            AI Academic Planner
          </button>

          <div className="flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPage(item.id)}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                  page === item.id
                    ? "bg-gray-950 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {page === "home" && <Home onPlanGenerated={handlePlanGenerated} />}
        {page === "planner" && <Planner plan={plan} />}
        {page === "tasks" && <Tasks />}
      </div>
    </div>
  );
}

export default App;
