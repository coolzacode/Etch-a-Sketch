const canvas = document.getElementById('canvas');

function makeGrid(rowSize = 16) {
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

function addEventListeners() {
    canvas.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('active-pixel')) return;

        const activePixel = e.target.closest('div'); 
        if (!activePixel) return;

        activePixel.classList.toggle('active-pixel');
        console.log("hi");
    })
}

makeGrid();
addEventListeners();