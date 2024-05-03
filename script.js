// let body = document.querySelector("body");
let grid = document.querySelector(".container");
let button = document.querySelector("button");
let squares;
let gridSize = 16;

createGrid(gridSize);

button.addEventListener("click", () => {
    gridSize = prompt("Grid row size: ")
    grid.remove();
    grid = document.createElement("div");
    grid.classList.add("container");
    button.parentNode.insertBefore(grid, button.nextSibling)

    createGrid(gridSize);
})


// populate container with X grid of square divs
function createGrid(size) {
    for(let i = 0; i < gridSize * gridSize; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("grid");
    
        // Calculate square size with formula
        //      padding = container width / gridSize / 2
        //      divide by 2 because padding is set to both sides
    
        squareDiv.style.padding = `calc(32vw / ${size} / 2)`;
    
        grid.appendChild(squareDiv);
    }

    // Coloring effect by hovering
    squares = document.querySelectorAll(".grid");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        })
    })
}