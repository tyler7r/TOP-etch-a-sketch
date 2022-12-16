const rows = document.querySelector('.sketchpad');
const gridRow = document.querySelector('.sketchpad.gridRow');
const cols = document.querySelector('.sketchpad');

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

function makeCanvas(rowNum, colNum) {
    makeRows(16);
    makeColumns(16);
}

makeCanvas();
