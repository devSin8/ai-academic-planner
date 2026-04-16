import Task from "../models/Task.js";

export async function getTasks(req, res) {
  try {
    const tasks = await Task.find().sort({ date: 1, createdAt: 1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks.",
      error: error.message
    });
  }
}

export async function updateTask(req, res) {
  try {
    const { id, completed } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Task id is required." });
    }

    const task = await Task.findByIdAndUpdate(
      id,
      { completed: Boolean(completed) },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    return res.json(task);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update task.",
      error: error.message
    });
  }
}
