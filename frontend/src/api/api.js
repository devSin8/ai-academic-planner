const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export function generatePlan(payload) {
  return request("/generate-plan", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function getTasks() {
  return request("/tasks");
}

export function updateTask(id, completed) {
  return request("/tasks/update", {
    method: "POST",
    body: JSON.stringify({ id, completed })
  });
}
