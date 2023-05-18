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
    const span = ev.currentTarget;
    const region = span.dataset.region;
    const rowColumnPair = region.split('.');
    const row = rowColumnPair[0];
    const column = rowColumnPair[1];
    if(turnPlayer === 'playerOne'){
        span.innerText = 'X';
        virtualBoard[row][column] = 'X';
    } else {
        span.innerText = 'O';
        virtualBoard[row][column] = 'O';
    };
    console.clear();
    console.table(virtualBoard);
    disableClick(span);
    const winRegion = getWinRegion();
};

function disableClick(element){
    element.style.cursor = 'default';
    element.removeEventListener('click', handleBoardClick);
};

document.getElementById('start').addEventListener('click', initializeGame);

function getWinRegion(){
    const winRegion = [];
    if(virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[0][1] && virtualBoard[0][0] === virtualBoard[0][2]);
    winRegion.push('0.0','0.1','0.2');
    if(virtualBoard[1][0] && virtualBoard[1][0] === virtualBoard[1][1] && virtualBoard[1][0] === virtualBoard[1][2]);
    winRegion.push('1.0','1.1','1.2');
    if(virtualBoard[2][0] && virtualBoard[2][0] === virtualBoard[2][1] && virtualBoard[2][0] === virtualBoard[2][2]);
    winRegion.push('2.0','2.1','2.2');
    if(virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][0] && virtualBoard[0][0] === virtualBoard[2][0]);
    winRegion.push('0.0','1.0','2.0');
    if(virtualBoard[0][1] && virtualBoard[0][1] === virtualBoard[1][1] && virtualBoard[0][1] === virtualBoard[2][1]);
    winRegion.push('0.1','1.1','2.1');
    if(virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][2] && virtualBoard[0][2] === virtualBoard[2][2]);
    winRegion.push('0.2','1.2','2.2');
    if(virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][1] && virtualBoard[0][0] === virtualBoard[2][2]);
    winRegion.push('0.0','1.1','2.2');
    if(virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][1] && virtualBoard[0][2] === virtualBoard[2][0]);
    winRegion.push('0.2','1.1','2.0');
    return winRegion;
};