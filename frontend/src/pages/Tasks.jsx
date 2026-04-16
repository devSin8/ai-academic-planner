import React from "react";
import { useEffect, useState } from "react";
import { getTasks, updateTask } from "../api/api.js";
import Dashboard from "../components/Dashboard.jsx";
import TaskList from "../components/TaskList.jsx";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadTasks() {
    setLoading(true);
    setError("");

    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleToggle(id, completed) {
    try {
      const updatedTask = await updateTask(id, completed);
      setTasks((current) =>
        current.map((task) => (task._id === id ? updatedTask : task))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <main>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-700">
            Task management
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-950">All tasks</h1>
        </div>

        <button
          type="button"
          onClick={loadTasks}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-800 transition hover:bg-gray-100"
        >
          Refresh
        </button>
      </div>

      {error && (
        <p className="mb-4 rounded-md border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </p>
      )}

      {loading ? (
        <p className="rounded-lg bg-white p-6 text-gray-600">Loading tasks...</p>
      ) : (
        <div className="space-y-6">
          <Dashboard tasks={tasks} />
          <TaskList tasks={tasks} onToggle={handleToggle} />
        </div>
      )}
    </main>
  );
}

export default Tasks;
