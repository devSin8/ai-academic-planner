import Task from "../models/Task.js";

export async function generatePlan(req, res) {
  try {
    const { subject, numberOfTopics, deadline } = req.body;

    if (!subject || !numberOfTopics || !deadline) {
      return res.status(400).json({
        message: "Subject, number of topics, and deadline are required."
      });
    }

    const topicCount = Number(numberOfTopics);
    const deadlineDate = new Date(deadline);

    if (!Number.isInteger(topicCount) || topicCount < 1) {
      return res.status(400).json({
        message: "Number of topics must be a positive whole number."
      });
    }

    if (Number.isNaN(deadlineDate.getTime())) {
      return res.status(400).json({
        message: "Deadline must be a valid date."
      });
    }

    const today = new Date();
    const totalDays =
      Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24)) || 1;

    const topicsPerDay = Math.ceil(topicCount / totalDays);

    let topicIndex = 1;
    const plan = [];

    for (let i = 0; i < totalDays && topicIndex <= topicCount; i++) {
      const currentDate = new Date();
      currentDate.setDate(today.getDate() + i);

      const tasks = [];

      for (let j = 0; j < topicsPerDay && topicIndex <= topicCount; j++) {
        tasks.push(`${subject} - Topic ${topicIndex}`);
        topicIndex++;
      }

      plan.push({
        day: `Day ${i + 1}`,
        date: currentDate.toISOString().split("T")[0],
        tasks
      });
    }

    const tasksToSave = plan.flatMap((day) =>
      day.tasks.map((taskTitle) => ({
        title: taskTitle,
        subject,
        date: new Date(day.date),
        completed: false
      }))
    );

    const savedTasks = await Task.insertMany(tasksToSave);

    return res.status(201).json({
      plan,
      tasks: savedTasks
    });

  } catch (error) {
    console.error("Generate plan error:", error);
    return res.status(500).json({
      message: "Failed to generate study plan.",
      error: error.message
    });
  }
}