const canvas = document.getElementById('canvas');
const sizeSlider = document.getElementById('size-slider');
const sizeValue = document.getElementById('size-value');
const resetBtn = document.getElementById('reset-btn');

let isDrawing = false;

function makeGrid(size = 16) {
    canvas.replaceChildren();
    canvas.style.setProperty('--grid-size', size);

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        fragment.appendChild(newDiv);
    }
    canvas.appendChild(fragment);
}

function handleDrawing(e) {
    if (e.type === 'mouseover' && !isDrawing) return;

    if (e.target.classList.contains('pixel')) {
        e.target.classList.add('active-pixel');
    }
}

window.addEventListener('mousedown', () => isDrawing = true);
window.addEventListener('mouseup', () => isDrawing = false);

canvas.addEventListener('mouseover', handleDrawing);
canvas.addEventListener('mousedown', handleDrawing);

sizeSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    sizeValue.textContent = `${val} x ${val}`;
    makeGrid(val);
});

resetBtn.addEventListener('click', () => {
    makeGrid(sizeSlider.value);
})


makeGrid();