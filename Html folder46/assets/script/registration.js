// Ваш код для обработки нажатия на кнопку "loginButton"
document.getElementById("loginButton").addEventListener("click", function() {
    let firstName = document.querySelector(".Name").value.trim();
    let lastName = document.querySelector(".surname").value.trim();
    let email = document.querySelector(".mail").value.trim();
    let password = document.querySelector(".password").value.trim();

    if (firstName === "" || lastName === "" || email === "" || password === "") {
        alert("Пожалуйста, заполните все поля.");
    } else {
        // Устанавливаем значение переменной getName равным значению инпута .Name
        const getName = document.querySelector(".Name").value.trim();
        // Здесь можно использовать переменную getName, содержащую значение инпута .Name

        // Экспортируем значение getName
        export { getName };
        window.location.href = "index2.html";
    }
});
