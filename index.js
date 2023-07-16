
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "q":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "w":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "e":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "r":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
        
            default:
                break;
        }
    });
    
}






var tom1 = new Audio("sounds/tom-1.mp3");
// document.querySelector(".w").addEventListener("click", playTom1);
function playTom1() {
    tom1.play();
    console.log(this.textContent);
    this.style.color = "blue";
}