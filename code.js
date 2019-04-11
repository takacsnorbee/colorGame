var numSqueres = 6
var colors = []
var pickedColor 
var squares = document.querySelectorAll('.square')
var colorDisplay = document.querySelector('#colorDisplay')
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var modeButton = document.querySelectorAll('.mode')

init()

function init() {
	setupModeButtons()
	setupSquares()
	reset()
}

function setupSquares() {
	for (let i = 0; i < squares.length; i++){
		squares[i].addEventListener('click', function(){
			var clickedColor = this.style.background
			if(clickedColor === pickedColor){
				messageDisplay.textContent = 'Correct!'
				resetButton.textContent = 'Play Again?'
				changeColors(clickedColor)
				h1.style.background = clickedColor
			} else {
				this.style.background = '#232323'
				messageDisplay.textContent = 'Try Again'
			}
		})
	}
}

function setupModeButtons() {
	for(var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener('click', function() {
			modeButton[0].classList.remove('selected')
			modeButton[1].classList.remove('selected')
			this.classList.add('selected')
			this.textContent === "Easy" ? numSqueres = 3: numSqueres = 6
			reset()
		})
	}
}

function reset() {
	colors = generateRandomColors(numSqueres)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	resetButton.textContent = 'New Color'
	messageDisplay.textContent = ''
	for(let i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = 'block'
			squares[i].style.background = colors[i]
		} else {
			squares[i].style.display = 'none'
		}
	}
	h1.style.background = 'steelblue'
}

resetButton.addEventListener('click', function() {
	reset()
})

function changeColors(color){
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.background = color
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num) {
	var arr = []
	
	for(let i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	
	return arr
}

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return `rgb(${r}, ${g}, ${b})`
}