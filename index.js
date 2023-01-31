// Initial variables for the canvas skeleton
let NUM_PIXELS_IN_ROW = 48;
let PIXEL_WIDTH = 15;
let COLOR_PICKER_SELECTIONS = 15;

// Local storage for saving pictures
function saveCanvas() {
    let myCanvas = document.getElementById('grid');
    localStorage.setItem("myCanvas", myCanvas);
};

let saveButton = document.getElementById('savemycanvas');

saveButton.addEventListener('click', (event) => {
    saveCanvas();
    console.log('My canvas saved!');
});

function loadCanvas() {
    localStorage.getItem("myCanvas");
};

let loadButton = document.getElementById('loadmycanvas');

loadButton.addEventListener('click', (event) => {
    loadCanvas();
    console.log('Your canvas was loaded!')
});

// End of local storage and save/load feature

// Create the 'canvas' with a for loop which will iterate based on inputs
// Good for scaling
let canvas = document.querySelector('.canvas');
canvas.style.width = PIXEL_WIDTH * NUM_PIXELS_IN_ROW + "px";
let colorPicker = document.querySelector('.color-picker-container');

for (let i = 0; i < NUM_PIXELS_IN_ROW ** 2; i++) {
    let pixel = document.createElement('button');
    // placeholder for the pixel class to create
    pixel.classList.add("pixel");
    pixel.style.width = PIXEL_WIDTH + "px";
    pixel.style.height = PIXEL_WIDTH + "px";
    pixel.border = "none";
    pixel.borderRadius = "20%";
    canvas.append(pixel);
};

saveCanvas();

// Paint brush effect
let paintEffect = document.getElementsByClassName("pixel");
for (let i = 0; i < paintEffect.length; i++) {
    paintEffect[i].onmousemove = function(e) {
        if (e.buttons == 1)
        paintEffect[i].style.backgroundColor = colorChoice;
    };
};

// Add event listener to all the canvas 'buttons'
let pixels = document.querySelectorAll('.pixel');
for (pixel of pixels) {
    // console.log("Creating event listener");
    pixel.addEventListener('click', (event) => {
        let clicked = event.target;
        clicked.style.background = colorChoice;
    });
};

// Color palette starts with blue
let colorChoice = document.createElement('div');
colorChoice.className = 'color-picker';
colorChoice.style.border = "solid 2px black";
// console.log(colorChoice);
colorPicker.append(colorChoice);
colorChoice.style.background = "blue";

colorChoice.addEventListener('click', (event) => {
    console.log("Picked blue")
    colorChoice = "blue";
    currentColorBlock.style.background.toggle = colorChoice;
});

// Red color picker
let redChoice = document.createElement('div');
redChoice.className = 'color-picker';
redChoice.style.border = "solid 2px black";
// console.log(redChoice);
colorPicker.append(redChoice);
redChoice.style.background = "red";

redChoice.addEventListener('click', (event) => {
    console.log("Picked red")
    colorChoice = "red";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Yellow color picker
let yellowChoice = document.createElement('div');
yellowChoice.className = 'color-picker';
yellowChoice.style.border = "solid 2px black";
// console.log(yellowChoice);
colorPicker.append(yellowChoice);
yellowChoice.style.background = "yellow";

yellowChoice.addEventListener('click', (event) => {
    console.log("Picked yellow")
    colorChoice = "yellow";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Green color picker
let greenChoice = document.createElement('div');
greenChoice.className = 'color-picker';
greenChoice.style.border = "solid 2px black";
// console.log(greenChoice);
colorPicker.append(greenChoice);
greenChoice.style.background = "green";

greenChoice.addEventListener('click', (event) => {
    console.log("Picked green")
    colorChoice = "green";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Black color picker
let blackChoice = document.createElement('div');
blackChoice.className = 'color-picker';
blackChoice.style.border = "solid 2px black";
// console.log(blackChoice);
colorPicker.append(blackChoice);
blackChoice.style.background = "black";

blackChoice.addEventListener('click', (event) => {
    console.log("Picked black")
    colorChoice = "black";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// White color picker
let whiteChoice = document.createElement('div');
whiteChoice.className = 'color-picker';
whiteChoice.style.border = "solid 2px black";
// console.log(brownChoice);
colorPicker.append(whiteChoice);
whiteChoice.style.background = "white";

whiteChoice.addEventListener('click', (event) => {
    console.log("Picked white")
    colorChoice = "white";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// orange color picker
let orangeChoice = document.createElement('div');
orangeChoice.className = 'color-picker';
orangeChoice.style.border = "solid 2px black";
// console.log(orangeChoice);
colorPicker.append(orangeChoice);
orangeChoice.style.background = "orange";

orangeChoice.addEventListener('click', (event) => {
    console.log("Picked orange")
    colorChoice = "orange";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Violet color picker
let violetChoice = document.createElement('div');
violetChoice.className = 'color-picker';
violetChoice.style.border = "solid 2px black";
// console.log(violetChoice);
colorPicker.append(violetChoice);
violetChoice.style.background = "violet";

violetChoice.addEventListener('click', (event) => {
    console.log("Picked violet")
    colorChoice = "violet";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Lime color picker
let limeChoice = document.createElement('div');
limeChoice.className = 'color-picker';
limeChoice.style.border = "solid 2px black";
// console.log(limeChoice);
colorPicker.append(limeChoice);
limeChoice.style.background = "lime";

limeChoice.addEventListener('click', (event) => {
    console.log("Picked lime")
    colorChoice = "lime";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Pink color picker
let pinkChoice = document.createElement('div');
pinkChoice.className = 'color-picker';
pinkChoice.style.border = "solid 2px black";
// console.log(pinkChoice);
colorPicker.append(pinkChoice);
pinkChoice.style.background = "pink";

pinkChoice.addEventListener('click', (event) => {
    console.log("Picked pink")
    colorChoice = "pink";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Brown color picker
let brownChoice = document.createElement('div');
brownChoice.className = 'color-picker';
brownChoice.style.border = "solid 2px black";
// console.log(brownChoice);
colorPicker.append(brownChoice);
brownChoice.style.background = "brown";

brownChoice.addEventListener('click', (event) => {
    console.log("Picked brown")
    colorChoice = "brown";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Tan color picker
let tanChoice = document.createElement('div');
tanChoice.className = 'color-picker';
tanChoice.style.border = "solid 2px black";
// console.log(tanChoice);
colorPicker.append(tanChoice);
tanChoice.style.background = "tan";

tanChoice.addEventListener('click', (event) => {
    console.log("Picked tan")
    colorChoice = "tan";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Cyan color picker
let cyanChoice = document.createElement('div');
cyanChoice.className = 'color-picker';
cyanChoice.style.border = "solid 2px black";
// console.log(cyanChoice);
colorPicker.append(cyanChoice);
cyanChoice.style.background = "cyan";

cyanChoice.addEventListener('click', (event) => {
    console.log("Picked cyan")
    colorChoice = "cyan";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Gray color picker
let grayChoice = document.createElement('div');
grayChoice.className = 'color-picker';
grayChoice.style.border = "solid 2px black";
// console.log(grayChoice);
colorPicker.append(grayChoice);
grayChoice.style.background = "gray";

grayChoice.addEventListener('click', (event) => {
    console.log("Picked gray")
    colorChoice = "gray";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Dark Golden Rod color picker
let darkgoldenrodChoice = document.createElement('div');
darkgoldenrodChoice.className = 'color-picker';
darkgoldenrodChoice.style.border = "solid 2px black";
// console.log(darkgoldenrodChoice);
colorPicker.append(darkgoldenrodChoice);
darkgoldenrodChoice.style.background = "darkgoldenrod";

darkgoldenrodChoice.addEventListener('click', (event) => {
    console.log("Picked darkgoldenrod")
    colorChoice = "darkgoldenrod";
    console.log("Current color adjusted")
    currentColorBlock.style.background = colorChoice;
});

// Color indicator label
let currentColorIndicator = document.createElement('div');
currentColorIndicator.className = 'color-picker';
currentColorIndicator.style.border = 'solid 2px black';
currentColorIndicator.style.backgroundColor = 'white';
currentColorIndicator.style.width = '85px';
currentColorIndicator.style.height = '50%';
currentColorIndicator.style.fontSize = 'x-small';
currentColorIndicator.style.fontWeight = 'bold';
currentColorIndicator.style.display = 'inlineblock';
currentColorIndicator.style.margin = '2%';
currentColorIndicator.style.padding = '2%';
// console.log(currentColorIndicator);
currentColorIndicator.innerHTML = 'Current color ---->';
colorPicker.append(currentColorIndicator);

// Define the empty current color block
// Event listeners on the other colors will change the color of this block dynamically
let currentColorBlock = document.createElement('div');
currentColorBlock.className = 'color-picker';
currentColorBlock.style.border = "solid 2px black";
// console.log(currentColorBlock);
colorPicker.append(currentColorBlock);
currentColorBlock.style.background = "white";

// Custom color picker
let customColor = document.getElementById('colorpicker');
customColor.addEventListener('click', (event) => {
    customColor.value = colorChoice;
})

saveCanvas();