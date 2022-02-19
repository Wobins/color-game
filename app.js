//console.log(eval('2 + 3 * 6 / 2'))
// let boxes = document.querySelectorAll('.box')
let colorSelected = document.getElementById('colorSelected');
let startBtn = document.querySelector('#startBtn');
let helpBtn = document.querySelector('#helpBtn');
let answerBtn = document.getElementById('answerBtn');
let counterBtn = document.querySelector('#counterBtn');
let message = document.querySelector('.message');
let divs = document.querySelectorAll('.item');

//function to generate new colors
const generateColors = () => {
    let newColors = [];
    let boxes = document.querySelectorAll('.box')
    
    boxes.forEach(box => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        console.log(r, g, b);
        let generatedColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'  //new color generated

        box.style.backgroundColor = generatedColor; //set background color of each box
        box.style.borderColor = generatedColor; // set border color of each box

        newColors.push(generatedColor);

    });

    console.log(newColors);
    return newColors;
}

//function to display the result message
function displayMsg() {
    let divColor = this.style.backgroundColor; //the color of the div box clicked
    
    let comparedColor = colorSelected.textContent; //the color to find

    if (divColor == comparedColor) {
        message.innerHTML = "<mark>GOT IT! CONGRATULATIONS!</mark>" //successful result message
    } 
    if (divColor != comparedColor) {
        message.innerHTML = "<mark>OH NO! TRY AGAIN!</mark>" //wrong result message
    }
}

//function to set the color to check
const colorToFind = () => {
    newColors = generateColors(); // generate new colors
    let boxes = document.querySelectorAll('.box')
    let n = boxes.length; // get the number of boxes
    let rand = Math.floor(Math.random() * n);
    
    let colorChosen = newColors[rand]; // pick the random color to find
    colorSelected.innerText = colorChosen; // tell which color to find
    message.innerHTML = ''; //erase the previous message


    //play the game by clicking any box element
    divs.forEach(div => {
        div.addEventListener('click', displayMsg);
    });
}

//Function to set the number of boxes
const setNumBoxes = (evt) => {
    let counter = evt.target.value;
    console.log(counter)
    //let boxes = [];
    //boxes.length = counter;

    let flex = document.querySelector('.flex');
    flex.innerHTML = '';

    let i = 0;
    while (i < counter) {
        let newBox = document.createElement("div");
        newBox.classList.add('box')
        
        flex.append(newBox);
        i++;
    }

    divs.forEach(div => {
        div.addEventListener('click', displayMsg);
    });

    
    colorToFind();
}

//Function to give the correct answer
function toResponse() {
    let answer = colorSelected.textContent;

    divs.forEach(div => {
        div.style.backgroundColor = answer;
    });

    message.innerHTML = "";
}


colorToFind();


counterBtn.addEventListener('change', setNumBoxes); //set the number of boxes
startBtn.addEventListener('click', colorToFind); //start the game
answerBtn.addEventListener('click', toResponse) //give the correct answer

//play the game by clicking any box element
divs.forEach(div => {
    div.addEventListener('click', displayMsg);
});
