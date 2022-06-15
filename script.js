//create a webpage with 16x16 grid of square divs 
//Select container element from HTML file 
const container = document.querySelector('.container');
let grid = drawGrid(16);

//perform popup when button is clicked 
const resizeButton = document.querySelector('.resize-btn');
resizeButton.onclick = popUp; 
const resetButton = document.querySelector('.reset-btn');
resetButton.onlick = reset; 

//FUNCTION reset color of grid 
function reset () {
    gridList.forEach(grid => grid.style.backgroundColor = 'black');
}

//FUNCTION pop up asking for user input to restart grid 
function popUp () {

    let size = prompt("Enter size of grid: ", "16");
    if (size >= 100) {
        return;
    }
    drawGrid(size);
}

//FUNCTION change color of grid when mouse is hovering over 
function changeColor() {
    this.style.backgroundColor = 'salmon';
}

//FUNCTION draw and color grid 
function drawGrid (size) {
    for (let i = 0; i < size*size; i ++) {
        //Column and row sizing
        container.style.gridTemplateColumns = "repeat(16, 1fr)";
        container.style.gridTemplateRows = "repeat(16, 1fr)";
        //create element in memory for the div 
        let grid = document.createElement('div');
        grid.style.backgroundColor = "black";
        //when mouse hovers over a div, change it's background color 
        grid.addEventListener('mouseover', changeColor);
        //Append newly created grid element to the container div in HTML file 
        container.append(grid);
        gridList = document.querySelectorAll('.grid')
}
}
