
for(let i = 0; i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click" , function (){
    // var audio0 = new Audio("sounds/tom-1.mp3");
    // var audio1 = new Audio("sounds/tom-2.mp3");
    // var audio2 = new Audio("sounds/tom-3.mp3");
    // var audio3 = new Audio("sounds/tom-4.mp3");
    // var audio4 = new Audio("sounds/snare.mp3");
    // var audio5 = new Audio("sounds/crash.mp3");
    // var audio6 = new Audio("sounds/kick-bass.mp3");
    // var audio7 = new Audio("sounds/tom-1.mp3");
        
        var audio = [
    new Audio("sounds/tom-1.mp3"),
    new Audio("sounds/tom-2.mp3"),
    new Audio("sounds/tom-3.mp3"),
    new Audio("sounds/tom-4.mp3"),
    new Audio("sounds/snare.mp3"),
    new Audio("sounds/crash.mp3"),
    new Audio("sounds/kick-bass.mp3"),
    new Audio("sounds/tom-1.mp3")
        ]
    
      //audio.play();

      if(this == document.querySelectorAll("button")[i] ){
         audio[i].play();
        // document.querySelectorAll("button")[i].className = "clkbtn";
      }
      //console.log(this);
      //this.style.color = "white";
      
});
}
