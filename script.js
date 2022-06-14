//create a webpage with 16x16 grid of square divs 
//Select container element from HTML file 
const container = document.querySelector('.container');
//use for loop to repeat 16 times 
for (let i = 0; i < 16; i ++) {
    //create element in memory for the div 
    const grid = document.createElement('div');
    //Append newly created grid element to the container div in HTML file 
    container.append(grid);
}