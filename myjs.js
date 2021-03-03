sixsided = [1, 2, 3, 4, 5, 6]

function rollsix() {
randomNumber = Math.floor(Math.random() * sixsided.length) +1;
{return randomNumber}
}
function display6(randomNumber){
    placeholder6 = document.getElementById('placeholder6');
    placeholder6.innerHTML = randomNumber
}
let button6 = document.getElementById('button6');


button6.onclick = function rollsixsides() {
let result6 = rollsix()
display6(result6)}
    
twentysided = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function rolltwenty() {
randomNumber = Math.floor(Math.random() * twentysided.length) +1;
{return randomNumber}
}
function display20(randomNumber){
    placeholder20 = document.getElementById('placeholder20');
    placeholder20.innerHTML = randomNumber
}
let button20 = document.getElementById('button20');


button20.onclick = function rolltwentysides() {
let result20 = rolltwenty()
display20(result20)}
