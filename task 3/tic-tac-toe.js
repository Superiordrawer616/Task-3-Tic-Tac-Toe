let string = 'X';
let buttons = document.querySelectorAll('.button');
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (button.innerText === '') {
            button.innerText = string;
            Winner();
            string = string === 'X' ? 'O' : 'X';
        }
    });
});
function Winner() {
    let b = Array.from(buttons).map(button => button.innerText);
    let wins = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8], 
        [0,4,8], [2,4,6]           
    ];
    for (let [a, b1, c] of wins) {
        if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
            buttons[a].classList.add('win-line');
            buttons[b1].classList.add('win-line');
            buttons[c].classList.add('win-line');
            setTimeout(() => {
                alert(b[a] + ' wins!');
                reset();
            }, 100); 
            return;
        }
    }
    if (b.every(cell => cell !== '')) {
        alert('Draw!');
        reset();
    }
}
function reset() {
    buttons.forEach(button =>{
        button.innerText = '';
        button.classList.remove('win-line');
    });
    string = "X"; 
}


