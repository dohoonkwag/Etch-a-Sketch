const gridContainer = document.querySelector('.container');

function createGrid(n=16) {
    for (let i=0; i<n; i++) {
        let rows = document.createElement('div');
        rows.className = 'grid-row';
        gridContainer.appendChild(rows);
        for (let j=0; j<n; j++) {
            let box = document.createElement('div');
            box.className = 'grid-box';
            rows.appendChild(box);
        }
    }
}

createGrid()