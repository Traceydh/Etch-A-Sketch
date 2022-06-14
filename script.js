//create a webpage with 16x16 grid of square divs 
//Select container element from HTML file 
const container = document.querySelector('.container');
//use for loop to repeat 16 times 
for (let i = 0; i < 16; i ++) {
    //create column with 16 divs 
    //create element in memory for the div 
    const gridCol = document.createElement('div');
    //Append newly created grid element to the container div in HTML file 
    container.append(gridCol);
    gridCol.textContent = i + 1;
        //create row with 16 divs 
        for (let j = 0; j < 15; j ++) {
            const gridRow = document.createElement('div');
            container.append(gridRow);
            gridRow.textContent = j + 1;
        }
}