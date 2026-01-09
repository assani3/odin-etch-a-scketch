const container = document.querySelector('#container');
const gridBtn = document.querySelector('#grid-btn');
const clearBtn = document.querySelector('#clear-btn');


let rows = document.getElementsByClassName('row');
let columns = document.getElementsByClassName('column');


defaultGrid()


// Creates a default grid sized 16x16
function defaultGrid() {
  makeRows(16);
  makeColumn(16);
}


function makeRows(numRows){
for(let i = 0; i < numRows ; i++){
    let row = document.createElement('div');
    row.className = "row";
    document.getElementById('container').appendChild(row); 
}
}


function makeColumn(columnNum){
    for (i = 0; i < rows.length; i++) {
    for (j = 0; j < columnNum; j++) {
      let column = document.createElement("div");
      rows[j].appendChild(column).className = "column";
    };
  };
}


function removeOldGrid(){
container.innerHTML = '';
}


 //implement event delegation
 container.addEventListener('mouseover', (event) => {
  if (event.target.matches('.column')){
      event.target.classList.add('my-color-class');
  }
  
});


clearBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.column');
    cells.forEach((cell) => {
        cell.classList.remove('my-color-class');
    });
});


gridBtn.addEventListener('click', () =>{
      removeOldGrid()

      let size = prompt('Enter number of squares per side (max 100):');

      size = Number(size);

      if(!size || size < 1 || size > 100){
          alert('Please enter a number between 1 and 100');
          return;
      }

      makeRows(size);
      makeColumn(size);
})