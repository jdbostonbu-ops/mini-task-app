// Source of truth
const tasks = [];

// Find DOM elements
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const list = document.getElementById("task-list");
const errorMsg = document.getElementById("error-msg");

function renderTasks() {
  list.replaceChildren(); 

  for (const task of tasks) {
    const li = document.createElement("li");

    // 1. Create the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // 2. Add the text directly to the li (using a Text Node for safety)
    const taskText = document.createTextNode(` ${task}`);

    // 3. Toggle the class on the LI itself
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed");
    });

    // 4. Assemble: Box first, then the text
    li.appendChild(checkbox);
    li.appendChild(taskText);
    
    list.appendChild(li);
  }
}

// ... rest of your Add/Clear/Enter handlers remain the same ...

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
  renderTasks();
});

clearBtn.addEventListener("click", () => {
  tasks.length = 0; 
  renderTasks();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});

