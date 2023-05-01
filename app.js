// Initial count
let count = 0;


// Get elements
const numValue = document.getElementById('value');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');


decrease.addEventListener('click', numDecrease);
reset.addEventListener('click', numReset);
increase.addEventListener('click', numIncrease);

function numDecrease(){
    numValue.textContent = count--;
}

function numReset(){
    numValue.textContent = 0;
}

function numIncrease(){
    numValue.textContent = count++;
}
