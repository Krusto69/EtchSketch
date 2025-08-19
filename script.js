

function createGrid() {
    let container = document.querySelector(".container");
    let grid = document.createElement("div");
    grid.classList.add("grid");
    for(let i=0;i<16;i++){
        grid.appendChild(createRow())
    }
    container.appendChild(grid);
}

function createRow(){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let i=0;i<16;i++){
        row.appendChild(createBlock());
    }
    return row
}

function createBlock(){
    let block = document.createElement("div")
    block.classList.add("block");
    block.addEventListener("mouseover", turnBlue);
    //block.addEventListener("mouseleave", turnRed);
    return block;
}

function turnBlue(event){
    event.target.style.backgroundColor = "Blue";
}

/*function turnRed(event){
    event.target.style.backgroundColor = "Red";
}*/

createGrid();