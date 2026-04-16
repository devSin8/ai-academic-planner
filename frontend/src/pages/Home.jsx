import React from "react";
import { useState } from "react";
import { generatePlan } from "../api/api.js";

function Home({ onPlanGenerated }) {
  const [form, setForm] = useState({
    subject: "",
    numberOfTopics: "",
    deadline: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await generatePlan(form);
      onPlanGenerated(result.plan, result.tasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
      <section>
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
          AI Academic Planner
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-950">
          Build a study plan that turns a deadline into daily tasks.
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Enter a subject, topic count, and deadline. The planner will generate
          a simple day-wise schedule and save every task.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Subject</span>
            <input
              required
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Data Structures"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none focus:border-cyan-600"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              Number of topics or chapters
            </span>
            <input
              required
              min="1"
              type="number"
              name="numberOfTopics"
              value={form.numberOfTopics}
              onChange={handleChange}
              placeholder="12"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none focus:border-cyan-600"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Deadline</span>
            <input
              required
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none focus:border-cyan-600"
            />
          </label>

          {error && (
            <p className="rounded-md border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-cyan-700 px-5 py-3 font-semibold text-white transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {loading ? "Generating..." : "Generate Plan"}
          </button>
        </form>
      </section>

      <img
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
        alt="Students studying together"
        className="h-72 w-full rounded-lg object-cover shadow-sm lg:h-[520px]"
      />
    </main>
  );
}

export default Home;
