let buttons = document.querySelectorAll(".drum");
for (i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function (){
        sound(this.innerHTML);
        styling(this);
    })
}

document.addEventListener("keypress", (event) => {
    let lowerCaseKey = event.key.toLowerCase();
    let keyElement = document.querySelector("." + lowerCaseKey);
    sound(lowerCaseKey);
    styling(keyElement);
})

const sound = (key) => {
    let audio;
    switch (key){
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;

        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            break;

        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            break;

        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            break;
            
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            break;

        case "k":
            audio = new Audio("./sounds/crash.mp3");
            break;

        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            break;

        default:
            alert("No instrument attached!");
    }
    audio.play();
}

const styling = (button) => {
    button.classList.add("styling");
    setTimeout(() => {
        button.classList.remove("styling");   
    }, 200);
}

