let NUM_PIXELS_IN_ROW = 50;
let PIXEL_WIDTH = 15;
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

let whiteChoice = document.createElement('div');
whiteChoice.className = 'color-picker';
whiteChoice.style.border = "solid 2px black";
// console.log(brownChoice);
colorPicker.append(whiteChoice);
whiteChoice.style.background = "white";

whiteChoice.addEventListener('click', (event) => {
    console.log("Picked white")
    colorChoice = "white";
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

let violetChoice = document.createElement('div');
violetChoice.className = 'color-picker';
violetChoice.style.border = "solid 2px black";
// console.log(violetChoice);
colorPicker.append(violetChoice);
violetChoice.style.background = "violet";

violetChoice.addEventListener('click', (event) => {
    console.log("Picked violet")
    colorChoice = "violet";
});

let limeChoice = document.createElement('div');
limeChoice.className = 'color-picker';
limeChoice.style.border = "solid 2px black";
// console.log(limeChoice);
colorPicker.append(limeChoice);
limeChoice.style.background = "lime";

limeChoice.addEventListener('click', (event) => {
    console.log("Picked lime")
    colorChoice = "lime";
});

let pinkChoice = document.createElement('div');
pinkChoice.className = 'color-picker';
pinkChoice.style.border = "solid 2px black";
// console.log(pinkChoice);
colorPicker.append(pinkChoice);
pinkChoice.style.background = "pink";

pinkChoice.addEventListener('click', (event) => {
    console.log("Picked pink")
    colorChoice = "pink";
});

let brownChoice = document.createElement('div');
brownChoice.className = 'color-picker';
brownChoice.style.border = "solid 2px black";
// console.log(brownChoice);
colorPicker.append(brownChoice);
brownChoice.style.background = "brown";

brownChoice.addEventListener('click', (event) => {
    console.log("Picked brown")
    colorChoice = "brown";
});

let tanChoice = document.createElement('div');
tanChoice.className = 'color-picker';
tanChoice.style.border = "solid 2px black";
// console.log(tanChoice);
colorPicker.append(tanChoice);
tanChoice.style.background = "tan";

tanChoice.addEventListener('click', (event) => {
    console.log("Picked tan")
    colorChoice = "tan";
});

let cyanChoice = document.createElement('div');
cyanChoice.className = 'color-picker';
cyanChoice.style.border = "solid 2px black";
// console.log(cyanChoice);
colorPicker.append(cyanChoice);
cyanChoice.style.background = "cyan";

cyanChoice.addEventListener('click', (event) => {
    console.log("Picked cyan")
    colorChoice = "cyan";
});

let grayChoice = document.createElement('div');
grayChoice.className = 'color-picker';
grayChoice.style.border = "solid 2px black";
// console.log(grayChoice);
colorPicker.append(grayChoice);
grayChoice.style.background = "gray";

grayChoice.addEventListener('click', (event) => {
    console.log("Picked gray")
    colorChoice = "gray";
});

let darkgoldenrodChoice = document.createElement('div');
darkgoldenrodChoice.className = 'color-picker';
darkgoldenrodChoice.style.border = "solid 2px black";
// console.log(darkgoldenrodChoice);
colorPicker.append(darkgoldenrodChoice);
darkgoldenrodChoice.style.background = "darkgoldenrod";

darkgoldenrodChoice.addEventListener('click', (event) => {
    console.log("Picked darkgoldenrod")
    colorChoice = "darkgoldenrod";
});

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

let currentColorBlock = document.createElement('div');
currentColorBlock.className = 'color-picker';
currentColorBlock.style.border = "solid 2px black";
// console.log(currentColorBlock);
colorPicker.append(currentColorBlock);
currentColorBlock.style.background = "cyan";

currentColorBlock.addEventListener('click', (event) => {
    console.log("Picked cyan")
    currentColorBlock = "cyan";
});






