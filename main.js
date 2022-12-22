const rows = document.querySelector('.sketchpad');
const sketchpad = document.querySelector('.sketchpad');

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
    makeRows(16);
    makeColumns(16);
}

makeCanvas();
createFunctionality();


function createFunctionality () {
    let fillColor = 'black';
    let canvasColor = 'white'

    document.querySelector('#canvasColorInput').value = '#ffffff';

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = canvasColor;
    })
    // let cellColor = cells.style.backgroundColor;
    let isDown = false;
    let eraseButtonClicked = false;
    let colorButtonClicked = false;
    let filledCell = false;
    let rainbowPenBtnClicked = false;

    cells.forEach((cell) => {
        cell.addEventListener ('mousedown', () => {
            isDown = true;
            if (eraseButtonClicked === true) {
            // cell.classList.remove('fill');
            cell.style.backgroundColor = canvasColor;
            filledCell = false;
        } else if (colorButtonClicked === true) {
            cell.style.backgroundColor = fillColor;
            filledCell = true;
            // cell.classList.add('fill');
        } else if (rainbowPenBtnClicked === true) {
            cell.style.backgroundColor = getRandomColor();
            filledCell = true;
        } else {
            cell.style.backgroundColor = fillColor;
        }
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
            if (isDown === true && rainbowPenBtnClicked === true) {
                console.log(getRandomColor());
                cell.style.backgroundColor = getRandomColor();
            } else if (isDown === true) {
                cell.style.backgroundColor = fillColor;
                filledCell = true;
                // cell.classList.add('fill');
            };
        })
    })

    function clearCanvas () {
        cells.forEach((cell) => {
            cell.style.backgroundColor = canvasColor;
            filledCell = false;
        })
    }

    const clearBtn = document.querySelector('#clearBtn');
    clearBtn.addEventListener('click', clearCanvas);

    function eraseCanvas () {
        eraseButtonClicked = true;
        colorButtonClicked = false;
        rainbowPenBtnClicked = false;
        cells.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                if(isDown === true && eraseButtonClicked === true) {
                // cell.classList.remove('fill');
                cell.style.backgroundColor = canvasColor;  
            }})
        })
    }

    const eraserBtn = document.querySelector('#eraserBtn');
    eraserBtn.addEventListener('click', eraseCanvas);

    function pen () {
        // if (colorButtonClicked === false) {
        let color = document.querySelector('#colorInput').value;
        // let input = prompt('What color pen do you want to use?');
        // let colorSelect = input.toLowerCase();
        // console.log(colorSelect);
        fillColor = color;
        colorButtonClicked = true;
        eraseButtonClicked = false;
        rainbowPenBtnClicked = false;
        cells.forEach((cell => {
            cell.addEventListener('mouseover', () => {
                if(isDown === true && colorButtonClicked === true) {
                cell.style.backgroundColor = fillColor;
                filledCell = true;
                // cell.classList.add('fill');
            }})
        }))
    }

    const colorSelect = document.querySelector('#colorSelect');
    colorSelect.addEventListener('click', pen); 

    function canvasColorSelect () {
        let color = document.querySelector('#canvasColorInput').value;
        canvasColor = color;
        // let input = prompt ('What color canvas do you want to work on?');
        // let canvasColorSelect = input.toLowerCase();
        // canvasColor = canvasColorSelect;
        cells.forEach((cell) => {
            cell.style.backgroundColor = canvasColor;
        })
    }

    const canvasColorBtn = document.querySelector('#canvasColor');
    canvasColorBtn.addEventListener('click', canvasColorSelect);

    function getRandomColor () {
        const randomColor = (Math.floor(Math.random()*16777215)).toString(16);
        let getRandomColor = '#' + randomColor;
        return getRandomColor;
    }

    function rainbowPen () {
        rainbowPenBtnClicked = true;
        eraseButtonClicked = false;
        colorButtonClicked = false;
        cells.forEach((cell) => {
            if (isDown === true) {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = getRandomColor();
            });
        }})
    }

    const rainbowPenBtn = document.querySelector('#rainbowPen');
    rainbowPenBtn.addEventListener('click', rainbowPen);

    function resetCanvas() {
        // rainbowPenBtnClicked = false;
        // eraseButtonClicked = false;
        // colorButtonClicked = true;
        canvasColor = 'white';
        document.querySelector('#canvasColorInput').value = '#ffffff';
        document.querySelector('#colorInput').value = '#000000';
        cells.forEach((cell) => {
            cell.style.backgroundColor = canvasColor;
        })
        fillColor = 'black';
    }

    const resetCanvasBtn = document.querySelector('#resetBtn');
    resetCanvasBtn.addEventListener('click', resetCanvas);
}

function removeGrid() {
    let removeGrids = rows.querySelectorAll('.gridRow');
    removeGrids.forEach((cell) => cell.remove());
}

function canvasSize() {
    removeGrid();
    // const gridArea = prompt ('What size grid do you want to work on? (Max of 100x100)');
    let size = document.querySelector('#canvasSize').value;
    console.log(size);
    let error = document.querySelector('.errors');
    if (size >= 2 && size <= 100) {
        makeRows(size);
        makeColumns(size);
        error.textContent = '';
        createFunctionality();
    } else {
        error.textContent ='Error, entered number either too large or too small';
        makeRows(16);
        makeColumns(16);
    }
}

const canvasAreaBtn = document.querySelector('#canvasAreaBtn');
canvasAreaBtn.addEventListener('click', canvasSize);
// QUESTION, why couldn't i adjust .fill directly with style.backgroundColor? I kept getting a typeError that said that the style property was null?
