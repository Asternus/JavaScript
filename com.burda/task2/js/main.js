var counter = 0;

function newClick () {
    alert('hi');
}
function counterClick (el) {
    ++ counter;
    el.innerHTML = "Вы нажали на кнопку " + counter;
    el.style.background = "red";
    el.style.color = "white";
}

function inputOver (el) {
    if (el.value == "Привет") {
        alert("И тебе привет");
    }
    console.log(el.value);
}