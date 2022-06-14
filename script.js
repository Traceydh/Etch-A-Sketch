//create a webpage with 16x16 grid of square divs 
//Select container element from HTML file 
const container = document.querySelector('.container');
let grid = document.createElement('div');



//change color of grid when mouse is hovering over 
function changeColor() {
    this.style.backgroundColor = 'salmon';
}
//perform popup when button is clicked 
const btn = document.querySelector('#btn');
btn.onclick = popUp; 
//popup function ask user for input 
function popUp () {
   let size = prompt("Enter size of grid: ", "16");
   //use for loop to repeat 16x16=256 times
   for (let i = 0; i < (size * size); i ++) {
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
//userInput should replace i, to remake the grid 
//remake new grid 
//set user input max=100

