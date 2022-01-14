const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const btnEraser = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')

function createDivs(col, rows) {
    for (let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div')
        div.style.border = '1px solid rgb(163, 110, 92)'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add('box')
    }
}

createDivs(16, 16)
function reSize() {
    btnSize.textContent = 'Resize'
    btnSize.addEventListener('click', () => {
        let size = prompt('Input size')
        if (size === null || size < 1 || size > 100) {
            reset()
            createDivs(16, 16)
            grayColor()
            blackColor()
            RGBColor()
            eraser()
        }
        else {
            reset()
            createDivs(size, size)
            grayColor()
            blackColor()
            RGBColor()
            eraser()
        }
    })

    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize()

function grayColor() {
    const boxes = container.querySelectorAll('.box')
    btnGray.textContent = "Gray"
    btnGray.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'gray';
        }))
    })

    buttonsContainer.appendChild(btnGray).classList.add('btn')
}
grayColor()

function blackColor() {
    const boxes = container.querySelectorAll('.box')
    btnBlack.textContent = "Black"
    btnBlack.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
    })

    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor()

function RGBColor() {
    const boxes = container.querySelectorAll('.box')
    btnRGB.textContent = "RGB"
    btnRGB.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 256)
            let B = Math.floor(Math.random() * 256)
            box.style.background = `rgb(${R},${G},${B} )`;
        }))
    })

    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}
RGBColor()

function eraser() {
    const boxes = container.querySelectorAll('.box')
    btnEraser.textContent="Eraser"
    btnEraser.addEventListener('click', () => {
        boxes.forEach((box) => box.addEventListener('mouseover', () => {
            box.style.background = 'white'
        }))
    })

    buttonsContainer.appendChild(btnEraser).classList.add('btn')
}
eraser()

function reset() {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.remove())
}

