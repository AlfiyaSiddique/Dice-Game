let randomNumber1 = Math.floor(Math.random()*6)+1;
let dice1 = document.querySelector('.img1').setAttribute('src',`images/dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random()*6)+1;
let dice2 = document.querySelector('.img2').setAttribute('src',`images/dice${randomNumber2}.png`);

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML = 
    '<img src="images/flag.png" class = "emoji">Player 1 Wins!';

}else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML= 
    "Player 2 wins! <img src='images/flag.png' class = 'emoji'>";
    
}else if(randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = "Draw!";
}