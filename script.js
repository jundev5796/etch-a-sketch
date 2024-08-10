const container = document.querySelector("#container");

function createGrid() {
  for (let i = 1; i < 257; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    grid.addEventListener("mouseover", function () {
      grid.style.backgroundColor = generateColor();
    });

    container.appendChild(grid);
  }
}

function generateColor() {
  const color = Math.floor(Math.random() * 256);
  return `#${color}`;
}

createGrid();
