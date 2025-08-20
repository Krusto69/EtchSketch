function createGrid(size) {
    let container = document.querySelector(".container");
    let grid = document.createElement("div");
    grid.classList.add("grid");
    for(let i=0;i<size;i++){
        grid.appendChild(createRow(size))
    }
    container.appendChild(grid);
}

function createRow(size){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let i=0;i<size;i++){
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

function popupthing(){
    let popup = document.querySelector("#popup");
    popup.showModal();
}

function cancelPopup(){
    let popup = document.querySelector("#popup");
    popup.close();
}

function reset(){
    const grid = document.querySelector(".grid");
    if (grid) grid.remove();
    let gridSize = document.querySelector("#gridSize").value;
    createGrid(gridSize);
    cancelPopup();
}


const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", popupthing);

const cancelButton = document.querySelector("#cancelButton");
cancelButton.addEventListener("click", cancelPopup);

const okButton = document.querySelector("#okButton");
okButton.addEventListener("click", reset);

createGrid(100);