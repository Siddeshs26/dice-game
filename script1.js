'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//initial condition
diceEl.classList.add('hidden');
score0El.textContent = 0;   
score1El.textContent = 0;  
let diceValue;
let currentScore=0; 


//rolling  a dice
btnRoll.addEventListener('click',function(){
    let diceValue = Math.trunc(Math.random()*6+1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceValue}.png`;
    currentScore+=diceValue;

})

//hold button
btnHold.addEventListener('click',function(){
    currentScore+=diceValue;
    current0El
})
