const calculator = document.querySelector('form');
const screen = document.querySelector('#screen');
const numberBtn = document.querySelectorAll('.keypad button');
calculator.addEventListener('submit', function() {
    event.preventDefault();
});
for(i = 0; i < numberBtn.length; i++) {
    let val = i + 1;
    numberBtn[i].addEventListener('click', function(){
        if(val < 10) {
            console.log(val);
        } else if(val === 10){ 
            console.log('.');
        } else if(val === 11) {
            console.log(0);
        } else {
            console.log('clear');
        };
        
    });
}
