import React from "react";
import StudyPlan from "../components/StudyPlan.jsx";

function Planner({ plan }) {
  return (
    <main>
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Generated plan
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-950">
          Day-wise study plan
        </h1>
      </div>

      <StudyPlan plan={plan} />
    </main>
  );
}

export default Planner;
