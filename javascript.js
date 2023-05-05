let isMousedown = false;


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
function toBlack() {
   const boxes = document.querySelectorAll('.gridboxes');
    boxes.forEach((box) => {
        box.addEventListener('mousedown', () => {
            isMousedown = true;
            box.style.backgroundColor = 'black';
        });
    box.addEventListener('mouseover', () => {
        if(isMousedown) {
            box.style.backgroundColor = 'black';
        }
    })
   
});
}

document.addEventListener('mouseup', () => {
    isMousedown = false;
});

const blkBtn = document.getElementById('blkBtn');
blkBtn.addEventListener('click', toBlack);





createGrid(100,100)


