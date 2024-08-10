const container = document.querySelector("#container");

function createGrid() {
  for (let i = 1; i < 257; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
  }
}

createGrid();
