var audio = [
  new Audio("tom-1.mp3"),
  new Audio("tom-2.mp3"),
  new Audio("tom-3.mp3"),
  new Audio("tom-4.mp3"),
  new Audio("snare.mp3"),
  new Audio("crash.mp3"),
  new Audio("kick-bass.mp3"),
  new Audio("tom-1.mp3")
      ]
for(let i = 0; i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click" , function (){
  
      if(this == document.querySelectorAll("button")[i] ){
         audio[i].play();
         document.querySelectorAll("button")[i].classList.add("pressed");
         setTimeout(()=>{
          document.querySelectorAll("button")[i].classList.remove("pressed");
         },100);
      }
      
});
}
document.addEventListener("keydown",(event) =>{

  switch (event.key){
    case "w":
    audio[0].play();
    break;

    case "a":
    audio[1].play();
    break;
    case "s":
    audio[2].play();
    break;
    case "d":
    audio[3].play();
    break;
    case "j":
    audio[4].play();
    break;
    case "k":
    audio[5].play();
    break;
    case "l":
    audio[6].play();
    break;
  }
  buttonAnimation(event);

  function buttonAnimation(event){
    // var activeButton = document.querySelector("." + event.key);
    // activeButton.classList.add("pressed");
    document.querySelector("." + event.key).classList.add("pressed");

    setTimeout(()=>{
      document.querySelector("." +event.key).classList.remove("pressed");
    },100);
  }
});

