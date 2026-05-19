const canvas = document.getElementById('canvas');

function makeGrid(rowSize = 4) {
    const gridSize = rowSize * rowSize;
    for (let i = 0; i < gridSize; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        Object.assign(newDiv.style, {
            width: `calc(100% / ${rowSize})`,
        });
        canvas.appendChild(newDiv);
    }
}

makeGrid();