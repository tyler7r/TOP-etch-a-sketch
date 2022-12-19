const rows = document.querySelector('.sketchpad');
const gridArea = prompt ('What size grid do you want to work on? (Max of 100x100)');

function makeRows (rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.classList.add ('gridRow');
        row.setAttribute('id', 'num' + [i + 1]);
        rows.appendChild(row);
    }
}

function makeColumns(colNum) {
    for (i = 0; i < colNum; i++) {
        for (j = 0; j < colNum; j++) {
            const gridSelect = document.querySelector('#num' + [i+1]);
            let cell = document.createElement('div');
            cell.classList.add('cell');
            gridSelect.appendChild(cell);
        }
    }
}

function makeCanvas() {
    makeRows(gridArea);
    makeColumns(gridArea);
}

makeCanvas();

function changeCellSize () {
    const cellSize = document.querySelectorAll('.cell');
    cellSize.style.height = '6px';
}

const cells = document.querySelectorAll('.cell');
let isDown = false;

cells.forEach((cell) => {
    cell.addEventListener ('mousedown', () => {
        isDown = true;
        cell.classList.toggle('fill');
    })
})

cells.forEach((cell) => {
    cell.addEventListener ('mouseup', () => {
        isDown = false;
    })
})

cells.forEach((cell) => {
    cell.addEventListener ('mouseover', () => {
        console.log(isDown)
        if (isDown === true) {
            cell.classList.add('fill');
        };
    })
})

function clearCanvas () {
    cells.forEach((cell) => {
        cell.classList.remove('fill');
    })
}

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearCanvas);

function eraseCanvas () {
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            if(isDown === true) {
            cell.classList.remove('fill');
        }})
    })
}

const eraserBtn = document.querySelector('#eraserBtn');
eraserBtn.addEventListener('click', eraseCanvas);

function pen () {
    cells.forEach((cell => {
        cell.addEventListener('mouseover', () => {
            if(isDown === true) {
            cell.classList.add('fill');
        }})
    }))
}

const colorSelect = document.querySelector('#colorSelect');
colorSelect.addEventListener('click', pen);
