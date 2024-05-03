// let body = document.querySelector("body");
let grid = document.querySelector(".container");
let button = document.querySelector("button");
let squares;
let gridSize = 16;

createGrid(gridSize);

button.addEventListener("click", () => {
    while(true) {
        gridSize = prompt("Grid row size (max: 100):")
        if(gridSize > 0 && gridSize <= 100) {
            break;
        }
    }
    
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
            let squareCompStyle = window.getComputedStyle(square);
            console.log(squareCompStyle.backgroundColor);

            square.style.opacity = (squareCompStyle.backgroundColor ===
                 "rgba(0, 0, 0, 0)") ? 
                 '1' : 
                 `${squareCompStyle.opacity - 0.1}`;
                 
            square.style.backgroundColor = getRandomColor();
        })
    })
}


// Extra: get random color for coloring effect
// https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}