//console.log(eval('2 + 3 * 6 / 2'))
let boxes = document.querySelectorAll('.box')
let colorSelected = document.getElementById('colorSelected')
let startBtn = document.querySelector('#startBtn')
let helpBtn = document.querySelector('#helpBtn')
let answerBtn = document.getElementById('answerBtn')



//function to generate new colors
const generateColors = () => {
    let newColors = [];
    
    boxes.forEach(box => {
        let r = Math.floor(Math.random() * 255) 
        let g = Math.floor(Math.random() * 255) 
        let b = Math.floor(Math.random() * 255)

        console.log(r, g, b)
        let generatedColor = 'rgb(' + r + ',' + g + ',' + b + ')'  //new color generated

        box.style.backgroundColor = generatedColor; //set background color of each box
        box.style.borderColor = generatedColor; // set border color of each box

        newColors.push(generatedColor)

    });

    console.log(newColors)
    return newColors
}

//function to set the color to check
const colorToFind = () => {
    newColors = generateColors(); // generate new colors
    let n = boxes.length; // get the number of boxes
    let rand = Math.floor(Math.random() * n) 
    
    let colorChosen = newColors[rand] // pick the random color to find
    colorSelected.innerText = colorChosen // tell which color to find
}

colorToFind()



startBtn.addEventListener('click', colorToFind) //start the game