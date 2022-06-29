//create a webpage with 16x16 grid of square divs 
//Select container element from HTML file 
const container = document.querySelector('.container');
//Select input color
const colourSelector = document.querySelector('#color');
//set color of grid as variable 
let paintColor = colourSelector.value;
let backgroundColor = 'black';
drawGrid(16);

//Set variable to detect if mouse is held down or up 
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//FUNCTION draw and color grid 
function drawGrid (size) {
    if (size < 1) {
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
        //when mouse is clicked or helddown and dragged change color
        grid.addEventListener('mouseover', changeColor);
        grid.addEventListener('mousedown', changeColor);
    }
}

//resize grid when slider is dragged and released
const resizeSlider = document.querySelector("#resize2");
const resizeOutput = document.querySelector(".resize-output");
resizeOutput.textContent = resizeSlider.value + " x " + resizeSlider.value;
resizeSlider.addEventListener('input', () => {
    resizeOutput.textContent = resizeSlider.value + " x " + resizeSlider.value;
    drawGrid(resizeSlider.value);
})


//resize grid when button is clicked 
const resizeButton = document.querySelector('.resize-btn');
resizeButton.onclick = resize; 
//reset color of grid when button is clicked 
const resetButton = document.querySelector('.reset-btn');
resetButton.onclick = reset; 
//Change to random paint color 
const randomColorButton = document.querySelector('.random-color-btn')
randomColorButton.onclick = randomColor; 
//get rainbow button 
const rainbowColorButton = document.querySelector('.rainbow-color-btn');
rainbowColorButton.onclick = () => paintColor = 'random';
//get color button 
const colourButton = document.querySelector('.colour');
colourButton.onclick = () => paintColor = colourSelector.value;

//FUNCTION reset color of grid 
function reset () {
    let grid = container.querySelectorAll('div');
    grid.forEach((div) => div.style.backgroundColor = backgroundColor);
}

//FUNCTION change color of grid when mouse is hovering over 
function changeColor(e) {
    //do not paint when mouse is not held down 
    if (e.type === 'mouseover' && !mouseDown) {
        return
    }

    if (paintColor === 'random') {
        this.style.backgroundColor = `rgb(${Math.floor((Math.random()*255))}, ${Math.floor((Math.random()*255))}, ${Math.floor((Math.random()*255))})`;
    }
    this.style.backgroundColor = paintColor;
}

//FUNCTION new paint color 
function randomColor() {
    paintColor = `rgb(${Math.floor((Math.random()*255))}, ${Math.floor((Math.random()*255))}, ${Math.floor((Math.random()*255))})`;
}

