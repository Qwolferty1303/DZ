// Проверка нажатия на кнопку "loginButton"
document.getElementById("loginButton").addEventListener("click", function() {
    let firstName = document.querySelector(".Name").value.trim();
    let lastName = document.querySelector(".surname").value.trim();
    let email = document.querySelector(".mail").value.trim();
    let password = document.querySelector(".password").value.trim();

    if (firstName === "" || lastName === "" || email === "" || password === "") {
        alert("Пожалуйста, заполните все поля.");
    } else {
        const name = document.getElementById('getName').value;
        console.log(name)
        localStorage.setItem("name", name);
        window.location.href = "index2.html";
    }
});

