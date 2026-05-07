// Source of truth
const tasks = [];

// Find DOM elements
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const list = document.getElementById("task-list");
const errorMsg = document.getElementById("error-msg");

// Updated Render Function with Checkbox Logic
function renderTasks() {
  list.innerHTML = "";

  for (const task of tasks) {
    const li = document.createElement("li");

    // 1. Create the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // 2. Create a span for the text
    const span = document.createElement("span");
    span.textContent = task;

    // 3. Add listener to the checkbox to toggle the "completed" class
    checkbox.addEventListener("change", () => {
      span.classList.toggle("completed");
    });

    // 4. Assemble the li and add to the list
    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);
  }
}

// Add handler
addBtn.addEventListener("click", () => {
  const newTask = input.value.trim();

  if (newTask === "") {
    errorMsg.textContent = "Please enter a task!";
    return;
  }

  errorMsg.textContent = ""; 
  tasks.push(newTask);
  input.value = "";
  input.focus(); 
  renderTasks();//used renderTasks
});

// Clear handler
clearBtn.addEventListener("click", () => {
  tasks.length = 0; 
  renderTasks();
});

// Allow "Enter" key to add task
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});

