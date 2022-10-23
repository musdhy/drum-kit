let drumLength = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let letters = this.innerHTML;
        makeSound(letters);
        buttonAnimation(letters);
    });
    
}

document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        default:console.log(innerHtml);
            break;
    }
}








function buttonAnimation(params) {
    let active = document.querySelector("." + params);
    active.classList.add("pressed");

    setTimeout(() => {
        active.classList.remove("pressed");
    }, 100);
}
























// // connecting the button to d music
// let  buttonLength = document.querySelectorAll(".drum").length
// for (let i = 0; i < buttonLength; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", listenForClicks);

//     function listenForClicks() {
//         let innerHtml = this.innerHTML;
//         strokes(innerHtml);
//         addAnimation(innerHtml)
//         }
//     };



// document.addEventListener("keypress", function(event) {
//     strokes(event.key)
//     addAnimation(event.key)
// });

// function strokes(key){
    
//         switch (key) {
            // case "w":
            //     let tom1 = new Audio("sounds/tom-1.mp3");
            //     tom1.play();
            //     break;
            // case "a":
            //     let tom2 = new Audio("sounds/tom-2.mp3");
            //     tom2.play();
            //     break;
            // case "s":
            //     let tom3 = new Audio("sounds/tom-3.mp3");
            //     tom3.play();
            //     break;
            // case "d":
            //     let tom4 = new Audio("sounds/tom-4.mp3");
            //     tom4.play();
            //     break;
            // case "j":
            //     let crash = new Audio("sounds/crash.mp3");
            //     crash.play();
            //     break;
            // case "k":
            //     let kick = new Audio("sounds/kick-bass.mp3");
            //     kick.play();
            //     break;
        
            // case "l":
            //     let snare = new Audio("sounds/snare.mp3");
            //     snare.play();
            //     break;
        
            // default:console.log(innerHtml);
            //     break;
// }
// }

// function addAnimation(keyword){
//     let activeAnimation = document.querySelector("." + keyword);
//     activeAnimation.classList.add("pressed");

//     setTimeout(function(){
//         activeAnimation.classList.remove("pressed");
//     },100);
// }