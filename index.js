


let currentPoint = 0;
let attemptLeft = 10;
let max = 2;
let min  = 1;
let i = 0
let guess = prompt(`enter your guess number btw ${min} and ${max}`)
let secretNum = Math.trunc(Math.random()* max) + min;

  
  if(secretNum == guess){
    currentPoint += 1
    console.log(`corrrent guess, you have ${currentPoint}`)
    max++
   
  }else{
    console.log(`try again, you have ${currentPoint}`);
    guess = prompt(`enter your guess number between ${min} and ${max}`)
  }

     
  


