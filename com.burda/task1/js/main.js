document.write("JS говорит привет");
console.log("JS говорит привет")
console.info("JS говорит привет")
console.error("JS говорит error")
console.warn("JS говорит warn")
var num = 5;
const num1 = 16;
console.log(num + " " + num1);
console.log("Result: " + (num + num1));
console.log(num+=7);
console.log(++num);
var str_1 = Number("111");
console.log(str_1);
console.log(Math.PI);
console.log(Math.random());
if (num = 5) {
    console.log("True")
} else  {
    console.log("false")
}
switch (num) {
    case 5:
        console.log("Is 5")
        break;
}
var arr = [5, "22", true, false, 0.98];
alert("Test"); // - всплывающее окно
confirm("Окно с согласием?"); // окно с согласием
var data = confirm("Да или нет?");
console.log(data);
if (data) {
    alert("Вы сказали да");
}
var cat = prompt("Сколько Вам лет?","188"); // ввод с клавиатуры
if (cat = 188){
    alert("Вы кот");
}
