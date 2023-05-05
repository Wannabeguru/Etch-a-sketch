
function createGrid(rows, cols){
    const getCanvas = document.getElementById('canvas');
    getCanvas.style.setProperty('--grid-rows', rows);
    getCanvas.style.setProperty('--grid-cols', cols);
    
    for (i=0; i < rows * cols; i++){
        const makeDiv = document.createElement('div');
        getCanvas.appendChild(makeDiv).className = 'gridboxes';
    }

}

createGrid(16,16)
