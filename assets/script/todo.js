// Переменные
const addButton = document.getElementById("sendInput");

// Провверка клика на кнопку "Add"
addButton.addEventListener("click", function() {
    addTask();
});

// Функция по добавлению задач и кнопки delete
function addTask() {
    const textInput = document.getElementById("AddText").value;
    const listHeader = document.getElementById("listHeader");

    if (textInput.trim() !== "") {
        const listItem = document.createElement("li");

        const uniqueId = Date.now();

        listItem.innerHTML = `<input type="checkbox" name="task" class="checkBox" id="checkBox-${uniqueId}">` +
            `<label for="checkBox-${uniqueId}">` +
            `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">` +
            `<path fill="currentColor" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4"></path>` +
            `</svg>` +
            `</label>` +
            `<p class="texter">${textInput}</p>` +
            `<input type="button" value="Delete" class="deleteBtn">`;

        listHeader.appendChild(listItem);
        document.getElementById("AddText").value = "";
    } else{
        alert("You didn't fill the row")
    }
}

// Функция по добавлению вашего имени
document.addEventListener("DOMContentLoaded", function () {
    const nameValue = localStorage.getItem("name");

    document.getElementById("demo").innerHTML =
        '<h1 class="center">Hello ' + nameValue + '</h1>' +
        '<h2 class="center">Good luck with your goals for today!</h2>' +
        '<img src="assets/Images/Gl image.png" alt="Good Luck picture" id="goodLuck">';
});

// Функция по удалению задачи
function deleteTask(element) {
    const listItem = element.closest("li");
    listItem.remove();
}

// Удаление Элемента по проверкам на нажатие
document.addEventListener("DOMContentLoaded", function () {
    const listHeader = document.getElementById("listHeader");

    listHeader.addEventListener("click", function (event) {
        if (event.target && event.target.classList.contains("deleteBtn")) {
            deleteTask(event.target);
        }
    });
});
