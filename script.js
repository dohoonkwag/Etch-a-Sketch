function createGrid(n=25) {
    const gridContainer = document.querySelector('.container');
    for (let i=0; i<n; i++) {
        let rows = document.createElement('div');
        rows.className = 'grid-row';
        gridContainer.appendChild(rows);
        const gridRows = document.querySelectorAll('.grid-row');
        gridRows.forEach ((row) => {
            row.style.height = `${500 / n}px`;
        })
        for (let j=0; j<n; j++) {
            let box = document.createElement('div');
            box.className = 'grid-box';
            rows.appendChild(box);
            const gridBoxes = document.querySelectorAll('.grid-box');
            gridBoxes.forEach((box) => {
            box.style.height = `${(500 / n) - 1}px`;
            box.style.width = `${(500 / n) - 1}px`;
            })
        }
    }
}

function numGenerator() {
    let randomNum = Math.floor(Math.random() * 255)
    return randomNum
}

function draw() {
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach((square) => {
        square.addEventListener('mouseover', function() {
            console.log('The mouse is over the element');
            square.style.backgroundColor = `rgb(${numGenerator()}, ${numGenerator()}, ${numGenerator()})`
        })
    })
}

function changeDimensions() {
    const gridContainer = document.querySelector('.container');
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    let newNum = prompt('How many squares would you like on each side of the container?');
    createGrid(Number(newNum));
    draw()
}

createGrid()
draw()

const button = document.querySelector('button');
button.addEventListener('click', function() {
    changeDimensions();
})