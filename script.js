const grid = document.querySelector(".container");
console.log(grid.style);
let gridSize = 16;

// populate container with X grid of square divs
for(let i = 0; i < gridSize * gridSize; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("grid");

    // Calculate square size with formula
    //      padding = container width / gridSize / 2
    //      divide by 2 because padding is set to both sides

    squareDiv.style.padding = `calc(32vw / ${gridSize} / 2)`;

    grid.appendChild(squareDiv);
}


// Coloring effect by hovering
let squares = document.querySelectorAll(".grid");
squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    })
})