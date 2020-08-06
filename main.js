// Required constants
const colors = {
    'null': 'white',
    '1' : 'blue',
    '-1': 'red'
}

const winningCombos = [
    //can these be in any order? 
    [0, 1, 2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// required variables
let board, turn, winner;

// cached elements
const boxes = document.querySelectorAll('td');
const startOver = document.querySelector('button');

// event listeners
document.querySelector('table').addEventListener('click', playerMove);
startOver.addEventListener('click', init);
//document.querySelector('button').addEventListener('click', restart);

// functions
function playerMove(e) {
    let idx = e.target.id;
    if(board[idx] === 1 || board[idx] === -1) {
        return;
    }
    console.log('clicked inside player move')    
    console.log(idx)
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}

function getWinner() {

    if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
    if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
    if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
    if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
    if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
    if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
    if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
    if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
    if (board.includes(null)) return null;

    return 'T';
}

function init() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    
    render();
}

function render() {
    board.forEach(function(square, idx) {
        boxes[idx].style.background = colors[square];
        
        /*
        gave me an error of '#0' is not valid selector.
    
        if(square === 1) {
            document.querySelector(`#${idx}`).style.background = colors[1];

        } else if(square === -1) {
            document.querySelector(`#${idx}`).style.background = colors[-1];

        } else {
            document.querySelector(`#${idx}`).style.background = colors['null'];

        }

    })
*/

    })
    if(winner === 'T') {
        console.log('its a tie');
    } else if(winner) {
        console.log(`Player ${colors[winner]} has won!`);
    } else {
        console.log(`Player ${colors[turn]} turn`);
    }
}

init();
