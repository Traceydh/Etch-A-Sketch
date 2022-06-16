//create a webpage with 16x16 grid of square divs 
//Select container element from HTML file 
const container = document.querySelector('.container');
//set color of grid as variable 
let paintColor = 'salmon';
let backgroundColor = 'black';
drawGrid(16);

//FUNCTION draw and color grid 
function drawGrid (size) {
    if (size < 1 ) {
        alert('Please enter a size between 1 to 100');
        return;
    }
    //Column and row sizing
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    //Select all previously made div elements 
    let grid = container.querySelectorAll('div');
    //for each div element, pass a function which removes it 
    grid.forEach((div) => div.remove());
    //create grid div elements 
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

//resize grid when button is clicked 
const resizeButton = document.querySelector('.resize-btn');
resizeButton.onclick = resize; 
//reset color of grid when button is clicked 
const resetButton = document.querySelector('.reset-btn');
resetButton.onclick = reset; 
//Change to random paint color 
const randomColorButton = document.querySelector('.random-color-btn')
randomColorButton.onclick = randomColor; 
//change to selected paint color 
const colorButton = document.querySelectorAll('.color-btn');
colorButton.forEach((button) => button.addEventListener('click', selectColor));
//Change to rainbow color 
const rainbowColorButton = document.querySelector('.rainbow-color-btn')
rainbowColorButton.onclick = rainbowColor; 

//FUNCTION reset color of grid 
function reset () {
    let grid = container.querySelectorAll('div');
    grid.forEach((div) => div.style.backgroundColor = backgroundColor);
}

//FUNCTION reset size of grid depending on input
function resize () {
    //get user input as variable into JS
    const size = document.querySelector('#resize');
    if (parseInt(size.value) <= 100) {
        console.log(size.value < 0);
        //redraw the div elements with value form user input 
        drawGrid(parseInt(size.value));
        size.value = '';
    } else {
        alert('Please enter a size between 1 to 100 nn');
        return;
    }
}

//FUNCTION change color of grid when mouse is hovering over 
function changeColor() {
    this.style.backgroundColor = paintColor;
}

//FUNCTION select color 
function selectColor() {
    console.log(colorButton);
}

//FUNCTION new paint color 
function randomColor() {
    let num = Math.floor((Math.random()*255));
    let num2 = Math.floor((Math.random()*255));
    let num3 = Math.floor((Math.random()*255));
    paintColor = `rgb(${num}, ${num2}, ${num3})`;
}

//FUNCTION rainbow paint 
function rainbowColor() {
}

