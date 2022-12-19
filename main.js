const rows = document.querySelector('.sketchpad');
const gridArea = prompt ('What size grid do you want to work on? (Max of 100x100)');
let fillColor = 'black';
let canvasColor = 'red';

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

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.style.backgroundColor = canvasColor;
})
let isDown = false;
let eraseButtonClicked = false;
let colorButtonClicked = false;

cells.forEach((cell) => {
    cell.addEventListener ('mousedown', () => {
        isDown = true;
        if (eraseButtonClicked === true) {
        // cell.classList.remove('fill');
        cell.style.backgroundColor = canvasColor;
    } else if (eraseButtonClicked === false) {
        cell.style.backgroundColor = fillColor;
        // cell.classList.add('fill');
    }})
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
            cell.style.backgroundColor = fillColor;
            // cell.classList.add('fill');
        };
    })
})

function clearCanvas () {
    cells.forEach((cell) => {
        cell.style.backgroundColor = canvasColor;
    })
}

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearCanvas);

function eraseCanvas () {
    eraseButtonClicked = true;
    colorButtonClicked = false;
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            if(isDown === true) {
            // cell.classList.remove('fill');
            cell.style.backgroundColor = canvasColor;  
        }})
    })
}

const eraserBtn = document.querySelector('#eraserBtn');
eraserBtn.addEventListener('click', eraseCanvas);

function pen () {
    let input = prompt('What color pen do you want to use?');
    let colorSelect = input.toLowerCase();
    fillColor = colorSelect;
    colorButtonClicked = true;
    eraseButtonClicked = false;
    cells.forEach((cell => {
        cell.addEventListener('mouseover', () => {
            if(isDown === true) {
            cell.style.backgroundColor = fillColor;
            // cell.classList.add('fill');
        }})
    }))
}

const colorSelect = document.querySelector('#colorSelect');
colorSelect.addEventListener('click', pen);


// QUESTION, why couldn't i adjust .fill directly with style.backgroundColor? I kept getting a typeError that said that the style property was null?
