const boardRegions = document.querySelectorAll('#gameBoard span');
let virtualBoard = [];
let turnPlayer = '';

function updateTurnPlayer(){
    const playerInput = document.getElementById(turnPlayer);
    document.getElementById('turnPlayer').innerText = playerInput.value;
};

function initializeGame(){
    virtualBoard = [['','',''],['','',''],['','','']];
    turnPlayer = 'playerOne';
    document.querySelector('h2').innerHTML = "Player <span id= 'turnPlayer'></span>, It's your turn!";
    updateTurnPlayer();
    boardRegions.forEach(function(element){
        element.classList.remove('win');
        element.innerText = '';
        element.addEventListener('click', handleBoardClick)
    });
};

function handleBoardClick(ev){

};

document.getElementById('start').addEventListener('click', initializeGame);