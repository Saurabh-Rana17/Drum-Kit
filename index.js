// function eventHandling() {
//     alert("Got clicked");
// }
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll ("button")[i].addEventListener("click", eventHandling);
// }
var tom1 = new Audio("sounds/tom-1.mp3");
document.querySelector(".w").addEventListener("click", playTom1);
function playTom1() {
    tom1.play();
}