const container = document.querySelector('.grid');
const greyBtn = document.querySelector('.btn-grey');
const rainbowBtn = document.querySelector('.btn-rainbow');
const blackBtn = document.querySelector('.btn-black');
const clearBtn = document.querySelector('.btn-clear');
const range = document.querySelector('.range-slider');
const gridValue = document.querySelector('.grid-value');


//Grid function
function makeGrid(cols, rows) {
    for(let i = 0; i < (rows * cols); i++) {
        let newDiv = document.createElement('div')
        container.classList.add('new-grid')
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(newDiv).classList.add('grid-item')     
    };
};

//Slider to change grid size
range.addEventListener('click', function() {

    let rangeValue = range.value
    gridValue.innerText = `${rangeValue} X ${rangeValue}`
    makeGrid(rangeValue, rangeValue)

    reset();

});

// Buttons
greyBtn.addEventListener('click', () => {
    let gridItem = document.querySelectorAll('.grid-item') 
    for(let j = 0; j < gridItem.length; j++) {
        gridItem[j].addEventListener('mouseenter', () => {
            gridItem[j].style.background = '#555'
    })
    }
});

rainbowBtn.addEventListener('click', () => {
    let gridItem = document.querySelectorAll('.grid-item')  
    for(let j = 0; j < gridItem.length; j++) {
        gridItem[j].addEventListener('mouseenter', () => {
            let rgbOne = Math.floor(Math.random() * 255)
            let rgbTwo = Math.floor(Math.random() * 255)
            let rgbThree = Math.floor(Math.random() * 255)
            gridItem[j].style.background = `rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`
    })
    }
});

blackBtn.addEventListener('click', () => {
    let gridItem = document.querySelectorAll('.grid-item')  
    for(let j = 0; j < gridItem.length; j++) {
        gridItem[j].addEventListener('mouseenter', () => {
            gridItem[j].style.background = '#111'
        })
    }
});

clearBtn.addEventListener('click', () => {
    let gridItem = document.querySelectorAll('.grid-item')  
    for(let j = 0; j < gridItem.length; j++) {
        gridItem[j].style.background = '#fff'
    }
    reset()
});

// Reset grid
function reset() {
    let gridItem = document.querySelectorAll('.grid-item')
    gridItem.forEach(element => {
        element.remove()
    });
    makeGrid(range.value, range.value)
}

window.onload = () => {
    makeGrid(16, 16)
}
    
   