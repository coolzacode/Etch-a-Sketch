const canvas = document.getElementById('canvas');

function makeGrid(rowSize = 16) {
    const gridSize = rowSize * rowSize;
    canvas.style.setProperty('--grid-size', rowSize);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < gridSize; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        fragment.appendChild(newDiv);
    }
    canvas.appendChild(fragment);
}

function addEventListeners() {
    canvas.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('active-pixel')) return;

        const activePixel = e.target.closest('div'); 
        if (!activePixel) return;

        activePixel.classList.toggle('active-pixel');
    })
}

makeGrid();
addEventListeners();