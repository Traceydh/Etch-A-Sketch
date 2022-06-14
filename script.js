//create a webpage with 16x16 grid of square divs 
//Select container element from HTML file 
const body = document.body;
const container = document.querySelector('.container');
let grid = document.createElement('div');
let color = 'black';
drawGrid(16);

//perform popup when button is clicked 
const btn = document.querySelector('.btn');
btn.onclick = popUp; 


//FUNCTION pop up asking for user input to restart grid 
function popUp () {
    //reset grid 
    let size = prompt("Enter size of grid: ", "16");
   drawGrid(size);
}

//FUNCTION change color of grid when mouse is hovering over 
function changeColor() {
    this.style.backgroundColor = 'salmon';
}

//FUNCTION draw grid  
function drawGrid (size) {
    for (let i = 0; i < size*size; i ++) {
        //create element in memory for the div 
        grid = document.createElement('div');
        //add attribute 
        grid.id = i + 1;
        //when mouse hovers over a div, change it's background color 
        grid.addEventListener('mouseover', changeColor);
        //Append newly created grid element to the container div in HTML file 
        container.append(grid);
}
}
