let NUM_PIXELS_IN_ROW = 16;
let PIXEL_WIDTH = 50;
let COLOR_PICKER_SELECTIONS = 16;

let canvas = document.querySelector('.canvas');
canvas.style.width = PIXEL_WIDTH * NUM_PIXELS_IN_ROW + "px";
let colorPicker = document.querySelector('.color-picker-container');

for (let i = 0; i < NUM_PIXELS_IN_ROW ** 2; i++) {
    let pixel = document.createElement('button');
    // placeholder for the pixel class to create
    pixel.classList.add("pixel");
    pixel.style.width = PIXEL_WIDTH + "px";
    pixel.style.height = PIXEL_WIDTH + "px";
    pixel.border = "solid 2px black";
    pixel.borderRadius = "20%";
    canvas.append(pixel);
};

let pixels = document.querySelectorAll('.pixel');
for (pixel of pixels) {
    // console.log("Creating event listener");
    pixel.addEventListener('click', (event) => {
        let clicked = event.target;
        clicked.style.background = colorChoice;
    });
};

// Color palette
let colorChoice = document.createElement('div');
colorChoice.className = 'color-picker';
colorChoice.style.border = "solid 2px black";
// console.log(colorChoice);
colorPicker.append(colorChoice);
colorChoice.style.background = "blue";

colorChoice.addEventListener('click', (event) => {
    console.log("Picked blue")
    colorChoice = "blue";
});

let redChoice = document.createElement('div');
redChoice.className = 'color-picker';
redChoice.style.border = "solid 2px black";
// console.log(redChoice);
colorPicker.append(redChoice);
redChoice.style.background = "red";

redChoice.addEventListener('click', (event) => {
    console.log("Picked red")
    colorChoice = "red";
});

let yellowChoice = document.createElement('div');
yellowChoice.className = 'color-picker';
yellowChoice.style.border = "solid 2px black";
// console.log(yellowChoice);
colorPicker.append(yellowChoice);
yellowChoice.style.background = "yellow";

yellowChoice.addEventListener('click', (event) => {
    console.log("Picked yellow")
    colorChoice = "yellow";
});

let greenChoice = document.createElement('div');
greenChoice.className = 'color-picker';
greenChoice.style.border = "solid 2px black";
// console.log(greenChoice);
colorPicker.append(greenChoice);
greenChoice.style.background = "green";

greenChoice.addEventListener('click', (event) => {
    console.log("Picked green")
    colorChoice = "green";
});

let blackChoice = document.createElement('div');
blackChoice.className = 'color-picker';
blackChoice.style.border = "solid 2px black";
// console.log(blackChoice);
colorPicker.append(blackChoice);
blackChoice.style.background = "black";

blackChoice.addEventListener('click', (event) => {
    console.log("Picked black")
    colorChoice = "black";
});

let orangeChoice = document.createElement('div');
orangeChoice.className = 'color-picker';
orangeChoice.style.border = "solid 2px black";
// console.log(orangeChoice);
colorPicker.append(orangeChoice);
orangeChoice.style.background = "orange";

orangeChoice.addEventListener('click', (event) => {
    console.log("Picked orange")
    colorChoice = "orange";
});

