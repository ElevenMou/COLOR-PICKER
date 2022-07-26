const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

const btnPick = document.getElementById('btnPick');
const btnReset = document.getElementById('btnReset');

const color = document.querySelector('.color');

btnPick.addEventListener('click', function(){
    let randomNumber;
    let newColor = '#';

    for(let i = 0 ; i < 6 ; i++) {
        randomNumber = getRandomNumber();
        console.log(randomNumber);
        newColor += colors[randomNumber];
    }

    color.textContent = newColor;
    document.body.style.backgroundColor = newColor;
})

btnReset.addEventListener('click', function(){
    color.textContent = '#eeeeee';
    document.body.style.backgroundColor = '#eeeeee';
})
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}