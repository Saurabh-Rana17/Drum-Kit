function eventHandling() {
    alert("Got clicked");
}
for (var i = 0; i < 7; i++) {
    document.querySelector("button")[i].addEventListener("click", eventHandling);
}