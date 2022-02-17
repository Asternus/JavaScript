var counter = 0;

var id = setInterval(myFunction, 1000);

function myFunction() {
    counter++;
    console.log("counter: " + counter)

    if (counter == 6) {
        clearInterval(id);
    }
}

setTimeout(function () {
    alert("Таймер сработал");
}, 2000);

/*
setInterval(function () {
    counter++;
    console.log("counter: " + counter)
}, 1500);*/
