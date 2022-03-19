const container = document.querySelector('.grid');
const greyBtn = document.querySelector('.btn-grey')
const rainbowBtn = document.querySelector('.btn-rainbow')
const blackBtn = document.querySelector('.btn-black')
const clearBtn = document.querySelector('.btn-clear')

function makeGrid(cols, rows) {
    container.classList.add('new-grid')
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`

    for(let i = 0; i < rows * cols; i++) {
        let newDiv = document.createElement('div')
        container.appendChild(newDiv)
        newDiv.classList.add('grid-item')
        
    }

    
}

makeGrid(16,16);


let gridItem = document.querySelectorAll('.grid-item')

greyBtn.addEventListener('click', () => {
    for(let j = 0; j < gridItem.length; j++) {
        gridItem[j].addEventListener('mouseenter', () => {
            console.log(gridItem[j])
            gridItem[j].style.background = '#555'
    })
    }
})









    
   
