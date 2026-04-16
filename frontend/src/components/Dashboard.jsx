import React from "react";
function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  const items = [
    { label: "Total tasks", value: total, color: "border-cyan-500" },
    { label: "Completed", value: completed, color: "border-emerald-500" },
    { label: "Pending", value: pending, color: "border-rose-500" }
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-lg border-l-4 ${item.color} bg-white p-4 shadow-sm`}
        >
          <p className="text-sm text-gray-600">{item.label}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-950">
            {item.value}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Dashboard;
