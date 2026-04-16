import React from "react";
function StudyPlan({ plan }) {
  if (!plan.length) {
    return (
      <p className="rounded-lg border border-dashed border-gray-300 bg-white p-6 text-gray-600">
        Generate a plan to see day-wise tasks here.
      </p>
    );
  }

  return (
    <section className="space-y-4">
      {plan.map((day) => (
        <article
          key={`${day.day}-${day.date}`}
          className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold text-gray-950">{day.day}</h2>
            <span className="text-sm text-gray-600">{day.date}</span>
          </div>

          <ul className="mt-4 space-y-2">
            {(day.tasks || []).map((task) => (
              <li
                key={task}
                className="rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-gray-800"
              >
                {task}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default StudyPlan;
