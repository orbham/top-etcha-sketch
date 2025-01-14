const container = document.getElementById("container");
const numOfSquares = 16;

for (let i=0; i<numOfSquares; i++) {
    const square = document.createElement("div");
    
    square.classList.add("square");
    container.appendChild(square);
}