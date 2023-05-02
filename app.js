// Initial count
let count = 0;


// Get elements
const numValue = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

// Add event listener for each button and change count
buttons.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const val = e.currentTarget.classList;
        if(val.contains('decrease')){
            count--;
        } else if(val.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        numValue.textContent = count;
    });
});
