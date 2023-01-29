let gridSquare1 = document.getElementById("grid-square-1");
let gridSquare2 = document.getElementById("grid-square-2");
let gridSquare3 = document.getElementById("grid-square-3");
let gridSquare4 = document.getElementById("grid-square-4");

gridSquare1.addEventListener("click", (event) => {
    console.log("Square 1 was clicked!");
    gridSquare1.classList.toggle("change-to-red");
});

gridSquare2.addEventListener("click", (event) => {
    console.log("Square 2 was clicked!");
    gridSquare2.classList.toggle("change-to-red");
});

gridSquare3.addEventListener("click", (event) => {
    console.log("Square 3 was clicked!");
    gridSquare3.classList.toggle("change-to-red");
});

gridSquare4.addEventListener("click", (event) => {
    console.log("Square 4 was clicked!");
    gridSquare4.classList.toggle("change-to-red");
});

