const input = document.getElementById("data-from-user");
const form = document.getElementById("form-test");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        input.value = "";
    }
});

function addTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    li.addEventListener("click", toggleTask);
};

function toggleTask() {
    this.classList.toggle("completed");
}