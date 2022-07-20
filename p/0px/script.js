const game = document.getElementById('game')
const ball = document.getElementById('ball')
const up = document.getElementById('up')
const right = document.getElementById('right')
const sUp = document.getElementById('sUp')
const sDown = document.getElementById('sDown')
const gUp = document.getElementById('gUp')
const gDown = document.getElementById('gDown')
const point = document.getElementById('point')
const market = document.getElementById('market')
const openMarket = document.getElementById('openMarket')
const closeMarket = document.getElementById('closeMarket')
const freeze = document.getElementById('freezeBall')
function gameStart(){
	setInterval(fps, 10)
	console.log("a")
}
let t = 1;
let l = 1;
let gravity = 100
let speed = 2
function fps(){	
	if(ball.style.marginTop != "250px"){
		if(ball.style.marginLeft != "250px"){
				
			let rand = Math.floor(Math.random()*speed)
			//console.log("as:"+ rand)
					
			if(rand == 0){t++}
			else if(rand == 1){l++}
		}
	}
	
	let value = ball.style.marginTop.substring(0, ball.style.marginTop.length - 2)
	let value2 = ball.style.marginLeft.substring(0, ball.style.marginLeft.length - 2)
	let valueRange = Math.floor((parseInt(value) + parseInt(value2)) / 5.1 + 2)
	point.innerText = valueRange+"%"
	ball.style.transition = gravity+"ms"
	ball.style.marginTop = t+"px"
	ball.style.marginLeft = l+"px"
}

up.addEventListener('click', () => {
	t = t - 20;
})

right.addEventListener('click', () => {
	l = l - 20;
})

sUp.addEventListener('click', () => {
	if(speed != 2){
		speed = speed - 2
	}
})
sDown.addEventListener('click', () => {
	speed = speed + 2
})
gUp.addEventListener('click', () => {
	gravity = gravity + 100
})
gDown.addEventListener('click', () => {
	gravity = gravity - 100
})

openMarket.addEventListener('click', () => {
	market.style.display = "block"
})
closeMarket.addEventListener('click', () => {
	market.style.display = "none"
})
let freezeVal = 0
freeze.addEventListener('click', () => {
	if(freezeVal == 0){
		speed = -2
		freezeVal = 1
	}else if(freezeVal == 1){
		speed = 2
		freezeVal = 0
	}
})

function skin(color){
	ball.style.backgroundColor = color
	ball.style.borderRadius = "0px"
	
	if(color == 'grad'){
		ball.style.background = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
		ball.style.borderRadius = "5px"
	}
}

gameStart()