import React from "react";
function TaskList({ tasks, onToggle }) {
  if (!tasks.length) {
    return (
      <p className="rounded-lg border border-dashed border-gray-300 bg-white p-6 text-gray-600">
        No tasks yet. Generate a study plan first.
      </p>
    );
  }

  return (
    <section className="space-y-3">
      {tasks.map((task) => (
        <article
          key={task._id}
          className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p
              className={`font-medium ${
                task.completed ? "text-gray-500 line-through" : "text-gray-950"
              }`}
            >
              {task.title}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              {task.subject} • {new Date(task.date).toLocaleDateString()}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onToggle(task._id, !task.completed)}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
              task.completed
                ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                : "bg-emerald-600 text-white hover:bg-emerald-700"
            }`}
          >
            {task.completed ? "Mark pending" : "Mark complete"}
          </button>
        </article>
      ))}
    </section>
  );
}

export default TaskList;
