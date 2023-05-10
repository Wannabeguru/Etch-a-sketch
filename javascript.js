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
            box.style.backgroundColor = currentColor;
        });
    box.addEventListener('mouseover', () => {
        if(isMousedown) {
            box.style.backgroundColor = currentColor;
        }
 
    });
   
});
}

//if mouse button goes up, change global isMousdown Variable to false;
document.addEventListener('mouseup', () => {
    isMousedown = false;
});

//adds click functionality to the black button and enables the changing of the boxes.
const blkBtn = document.getElementById('blkBtn');
blkBtn.addEventListener('click', () => {
    currentColor = 'black';
        toColor(currentColor);
});



//rainbow button
const rainbowBtn = document.getElementById('rainbowBtn');
rainbowBtn.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.gridboxes');
    boxes.forEach((box) => {
        box.addEventListener('mousedown', () => {
            isMousedown = true;
            box.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        });
        box.addEventListener('mouseover', () => {
            if(isMousedown) {
                box.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
        });
    });
});



const eraseButton = document.getElementById('eraseButton');
eraseButton.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.gridboxes');
    boxes.forEach((box) => {
        box.addEventListener('mousedown', () => {
            isMousedown = true;
            box.style.backgroundColor = 'white';
        });
        box.addEventListener('mouseover', () => {
            if(isMousedown) {
                box.style.backgroundColor = 'white';
            }
        });
    });
});



const colorPicker = document.getElementById('colorPicker');
const colorInput = document.getElementById('colorInput');
colorPicker.addEventListener('click', () => {
    colorInput.click();
});

colorInput.addEventListener('change', () => {
    currentColor = colorInput.value;
    toColor(currentColor);
});




createGrid(25,25)