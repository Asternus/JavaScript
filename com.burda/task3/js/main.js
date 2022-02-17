var text = document.getElementById('text');
console.log(text.title);
console.log(text.id);
document.getElementById("text").style.color = "red";

var spans = document.getElementsByTagName('span');
for (var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}
