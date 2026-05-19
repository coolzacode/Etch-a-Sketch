const canvas = document.getElementById('canvas');

function makeGrid(size = 16) {
    canvas.style.setProperty('--grid-size', size);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < size * size; i++) {
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