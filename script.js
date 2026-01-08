//RUN TEST TO CREATE ONE COLUMN AND IT WORKS


//let container = document.querySelector("#container");
/*
let row1 = document.createElement("div");
let column = document.createElement("div");

//second column
let column1 = document.createElement("div");

//third column
let column2 = document.createElement("div");


//addind classes
row1.classList.add('row');
column.classList.add('column');

//second column
column1.classList.add('column');

//third column
column2.classList.add('column');


//column inside row makes 1 cell
row1.appendChild(column);

// second column
row1.appendChild(column1);

//third column
row1.appendChild(column2);

//one cell to container
dd.appendChild(row1);


*/









//Assani creates multiple rows on command and 
//multiple columns

let rows = document.getElementsByClassName("row");;
let columns = document.getElementsByClassName("column");

// Creates a default grid sized 16x16
//Leaning more towards using default value for prompt but
//we will see
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

defaultGrid()

function gridButton() {
let numRows = prompt("Enter the number of rows")
let columnNum = prompt("Enter the number of columns")


const r = numRows;



const c = columnNum;




makeRows(r);
makeColumn(c);
}



 //trying to implement event delegation
 //https://davidwalsh.name/event-delegate
 document.getElementById('container').addEventListener('mouseover', (event) => {
  if (event.target.matches('.column')){
      event.target.classList.add('my-color-class');
  }
  
});




