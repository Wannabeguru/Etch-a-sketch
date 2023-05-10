let isMousedown = false;
let currentColor = 'black';

//makes grid
function createGrid(rows, cols){
    const getCanvas = document.getElementById('canvas');
    getCanvas.style.setProperty('--grid-rows', rows);
    getCanvas.style.setProperty('--grid-cols', cols);
    
    for (i=0; i < rows * cols; i++){
        const makeDiv = document.createElement('div');
        getCanvas.appendChild(makeDiv).className = 'gridboxes';
    }

}



// function to change boxes on mouseDown while hovering over other boxes.
function toColor() {
   const boxes = document.querySelectorAll('.gridboxes');
    boxes.forEach((box) => {
        box.addEventListener('mousedown', () => {
            isMousedown = true;
            box.style.backgroundColor = color;
        });
    box.addEventListener('mouseover', () => {
        if(isMousedown) {
            box.style.backgroundColor = 'black';
        }
    })
   
});
}

//if mouse button goes up, change global isMousdown Variable to false;
document.addEventListener('mouseup', () => {
    isMousedown = false;
});

//adds click functionality to the black button and enables the changing of the boxes.
const blkBtn = document.getElementById('blkBtn');
blkBtn.addEventListener('click', toBlack);

createGrid(25,25)