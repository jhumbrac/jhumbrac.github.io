const calculator = document.querySelector('form');
const inputField = document.querySelector('#screen');
const numberBtn = document.querySelectorAll('.keypad button');
calculator.addEventListener('submit', () => {
    event.preventDefault();
});
for(i = 0; i < numberBtn.length; i++) {
    let val = i + 1;
    numberBtn[i].addEventListener('click', function(){
        if(val < 10) {
            console.log(val);
            inputField.value = val;
            //screen.value = val;
        } else if(val === 10){ 
            console.log('.');
            inputField.value = '.';
        } else if(val === 11) {
            console.log(0);
            inputField.value = 0;
        } else {
            inputField.textContent = '';
            inputField.value = '';
        }
    });
}
