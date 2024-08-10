const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

function createGrid(size) {
  const squareSize = 800 / size; // Adjust to fit within 800px container
  container.innerHTML = ""; // Clear previous grid

  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = `${squareSize}px`;
    grid.style.height = `${squareSize}px`;

    grid.addEventListener("mouseover", function () {
      grid.style.backgroundColor = generateColor();
    });

    container.appendChild(grid);
  }
}

createGrid(16);

function generateColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16); // Generates a random color in hex
  return `#${color.padStart(6, "0")}`; // Ensures the color is 6 digits
}

function resetGrid() {
  const input = parseInt(window.prompt("Input new grid size:"));
  if (isNaN(input) || input < 1 || input > 100) {
    alert(
      "Your input value is out of range. Please enter a number between 1 and 100."
    );
  } else {
    createGrid(input);
  }
}

btn.addEventListener("click", resetGrid);

// const container = document.querySelector("#container");
// const btn = document.querySelector("#btn");

// function createGrid(size) {
//   const squareSize = 960 / size;
//   for (let i = 1; i < size * size; i++) {
//     const grid = document.createElement("div");
//     grid.classList.add("grid");
//     grid.style.width = `${squareSize}px`;
//     grid.style.height = `${squareSize}px`;

//     grid.addEventListener("mouseover", function () {
//       grid.style.backgroundColor = generateColor();
//     });

//     container.appendChild(grid);
//   }
// }

// createGrid(16);

// function generateColor() {
//   const color = Math.floor(Math.random() * 256);
//   return `#${color}`;
// }

// function resetGrid() {
//   btn.addEventListener("click", function () {
//     const input = parseInt(window.prompt("Input new grid size:"));
//     if (input < 0 || input > 100) {
//       alert("Your input value is out of range");
//     } else {
//       container.innerHTML = "";
//       createGrid(input);
//     }
//   });
// }

// resetGrid();
