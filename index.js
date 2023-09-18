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
    switch (key){
        case "w":
            let audioW = new Audio("./sounds/tom-1.mp3");
            audioW.play();
            break;

        case "a":
            let audioA = new Audio("./sounds/tom-2.mp3");
            audioA.play();
            break;

        case "s":
            let audioS = new Audio("./sounds/tom-3.mp3");
            audioS.play();
            break;

        case "d":
            let audioD = new Audio("./sounds/tom-4.mp3");
            audioD.play();
            break;
            
        case "j":
            let audioJ = new Audio("./sounds/snare.mp3");
            audioJ.play();
            break;

        case "k":
            let audioK = new Audio("./sounds/crash.mp3");
            audioK.play();
            break;

        case "l":
            let audioL = new Audio("./sounds/kick-bass.mp3");
            audioL.play();
            break;
    }
}

const styling = (button) => {
    button.classList.add("styling");
    setTimeout(() => {
        button.classList.remove("styling");   
    }, 300);
}

