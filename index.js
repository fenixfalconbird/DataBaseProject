
var buttons =  document.querySelectorAll(".drum")

for (let i = 0; i < buttons.length; i++) {
   
    buttons[i].addEventListener("click",function(){

        var botaoHTML = this.innerHTML;
        fazSom(botaoHTML);
        buttonAnimation(botaoHTML);
       
        
    })
    
}

document.addEventListener("keypress",function(event){


    fazSom(event.key);
    buttonAnimation(event.key);

});

function fazSom(valor){

    switch (valor) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
    
        default:
            break;
    }

}

function buttonAnimation(key){
    var activebutton = document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function(){activebutton.classList.remove("pressed")},300)

}


