//create a webpage with 16x16 grid of square divs 
//Select container element from HTML file 
const container = document.querySelector('.container');
//set color of grid as variable 
let paintColor = 'salmon';
let backgroundColor = 'black';
drawGrid(16);

//resize grid when button is clicked 
const resizeButton = document.querySelector('.resize-btn');
resizeButton.onclick = resize; 
//reset color of grid when button is clicked 
const resetButton = document.querySelector('.reset-btn');
resetButton.onclick = reset; 
//Change paint color 
const randomColorButton = document.querySelector('.color-btn')
randomColorButton.onclick = randomColor; 
//Wchange to rainbow paint color
const rainbowColorButton = document.querySelector('.color-btn')
rainbowColorButton.onclick = rainbowColor; 


//FUNCTION reset color of grid 
function reset () {
    let grid = container.querySelectorAll('div');
    grid.forEach((div) => div.style.backgroundColor = backgroundColor);
}

//FUNCTION reset size of grid depending on input
function resize () {
    const size = document.querySelector('#resize');
    if (size.value >= 1 || size.value <= 100) {
        drawGrid(size.value);
        size.value = '';
    } else {
        alert('enter a size between 1 to 100');
        return;
    }
    console.log(size.value);
}

//FUNCTION change color of grid when mouse is hovering over 
function changeColor() {
    this.style.backgroundColor = paintColor;
}

//FUNCTION new paint color 
function rainbowColor() {
    let num = Math.floor((Math.random()*255));
    let num2 = Math.floor((Math.random()*255));
    let num3 = Math.floor((Math.random()*255));
    paintColor = `rgb(${num}, ${num2}, ${num3})`;
}

//FUNCTION draw and color grid 
function drawGrid (size) {
    //Column and row sizing
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    //Remove previous grid colors
    let grid = container.querySelectorAll('div');
    grid.forEach((div) => div.remove());
    for (let i = 0; i < size*size; i ++) {
        //create element in memory for the div 
        let grid = document.createElement('div');
        grid.style.backgroundColor = backgroundColor;
        //Append newly created grid element to the container div in HTML file 
        container.append(grid);
        //when mouse hovers over a div, change it's background color 
        grid.addEventListener('mouseover', changeColor);
    }
}