document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById("main-form");
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
    var fail = "";

    if (name == "" || pass == "" || repass == "" || state == "") {
        fail = "Заполните все поля";
    } else if (name.length <= 1 || name.length >= 50) {
        fail = "Вы ввели некоректно имя";
    } else if (pass != repass) {
        fail = "Пароли не совпадают";
    }

    if (fail != "") {
        document.getElementById("error").innerHTML = fail;
        return false;
    } else {
        window.location = "https://itproger.com/course/javascript/12"
        return false;
    }
}