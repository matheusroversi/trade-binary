var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089')

ws.onopen = function (evt) {
	ws.send(JSON.stringify({ ticks: 'R_100' }))
}

ws.onmessage = function (msg) {
	var data = JSON.parse(msg.data)
	data.tick.quote

	addTick(data.tick.quote) // Save new tick in array
	onBet(data.tick.quote)   // For function Bet
	bot()
}

let tick = ''
let arr = []
let arrMove = []
let max = 0
let min = 999999
let mov
let nTickets = 20
let maxTemp = 0
let minTemp = 999999
let Hour = ''

const maxTempBadge = document.getElementById('maxTemp')
const maxBadge = document.getElementById('max')
const minBadge = document.getElementById('min')
const tickBadge = document.getElementById('tick')

const addTick = value => {

	// Alter color Tick
	if (value >= max) {
		alterColor(tickBadge, 'primary')
	} else if (value > tick) {
		alterColor(tickBadge, 'info')
		mov = 'UP'
	} else {
		alterColor(tickBadge, 'danger')
		mov = 'DO'
	}

	tick = value


	// Save on array
	if (arr.length >= nTickets) {
		arr.pop()
		arrMove.pop()
	}
	arr.unshift(tick)


	max = 0
	min = 999999
	arr.map(t => {
		if (t > max) max = t
		if (t < min) min = t

		d = new Date()
		if (Hour === '') Hour = d.getHours()
		if (Hour !== d.getHours()) {
			maxTemp = 0
			Hour = d.getHours()
			console.log('Valor maximo/hora zerado')
		}
		if (max > maxTemp) {
			maxTemp = max
			console.log('HI: ' + maxTemp)
		}
		if (min < minTemp) {
			minTemp = min
			console.log('LOW: ' + minTemp)
		}
	})

	maxBadge.textContent = max
	minBadge.textContent = min
	tickBadge.textContent = tick
	maxTempBadge.textContent = maxTemp


	// How Movement Tick Do. ([ HIGH - UP - DOWN - LOW ] = [ HI - UP - DO - LO ])
	if (value <= min) {
		mov = 'LO'
	} else if (tick >= max) {
		mov = 'HI'
	}
	arrMove.unshift(mov)
	//console.log(arrMove)


	/*console.log('>>>>>>')
	console.log(arr.toString())
	console.log('max: ' + max)
	console.log('min: ' + min)
	console.log('aposta: ' + betTick)*/

	generateChart(arr)
	moviment(arrMove)
}

const generateChart = arr => {

	var arr2 = []
	arr.map(t => {
		arr2.unshift(t)
	})
	$('.sparkline').sparkline(arr2, {
		width: '300px',
		height: '100px',
		maxSpotColor: '#3232ff',
		minSpotColor: '#ff0000',
		spotColor: '#6ec96e',
		lineColor: '#6ec96e',
		spotRadius: 3,
		fillColor: '#e9f4de'
	})

}

const alterColor = (element, color) => {
	colors = ['badge-success', 'badge-danger', 'badge-warning', 'badge-primary']
	colors.map(value => {
		element.classList.remove(value)
	})
	element.classList.add('badge-' + color)
}


let bet = false
let betTick = ''
let arrBet = []

// Trigger button Bet
const betButton = document.getElementById('betbutton')
betButton.addEventListener('click', (e) => {
	bet = true
	reset()
})

// Reset fields, charts for a new Bet
const reset = () => {
	document.getElementById("betbutton").disabled = true
	$('.sparkline2').sparkline([])
	alert.setAttribute('hidden', '')
	arrBet = []
}

// Function save number Beted
const toBet = (tick) => {
	betTick = tick
	arrBet.push(tick)
	console.log('Aposta realizada: ' + tick)
}


// IF Bet
const onBet = (tick) => {

	if (bet && betTick === '') {
		toBet(tick)
		return false
	} else if (bet === false || betTick === '') {
		return false
	}


	if (arrBet.length <= 5) {
		// Save Bet
		arrBet.push(tick)
	} else {
		// Clear Bet
		bet = false
		betTick = ''
		document.getElementById("betbutton").disabled = false
		return false
	}

	// Chart Mount
	if (tick > betTick) {
		normalRangeMax = tick
		normalRangeMin = betTick
		normalRangeColor = '#fce3e3'
	} else {
		normalRangeMax = betTick
		normalRangeMin = tick
		normalRangeColor = '#e9f4de'
	}


	$('.sparkline2').sparkline(arrBet, {
		width: '300px',
		height: '100px',
		maxSpotColor: '#3232ff',
		minSpotColor: '#ff0000',
		spotColor: '#6ec96e',
		lineColor: '#6ec96e',
		spotRadius: 3,
		fillColor: 'transparent',
		normalRangeMax: normalRangeMax,
		normalRangeMin: normalRangeMin,
		normalRangeColor: normalRangeColor
	})


	if (arrBet.length === 6) {
		if (tick > betTick) {
			// Perdeu
			status('Perdeu =(', 'danger')
			if (scriptCheck.checked) lose = lose + 1
			console.log('Você Perdeu')
		} else {
			// Ganhou
			status('Ganhou! =D', 'success')
			if (scriptCheck.checked) win = win + 1
			console.log('Você Ganhou')
		}

		// Update Bot Score
		if (scriptCheck.checked) {
			elWin.textContent = win
			elLose.textContent = lose
		}
	}

}

const alert = document.getElementById("alert")
const status = (message, color) => {

	colors = ['alert-success', 'alert-danger', 'alert-warning', 'alert-primary']
	colors.map(value => {
		alert.classList.remove(value)
	})

	alert.textContent = message
	alert.classList.add('alert-' + color)

	if (alert.hasAttribute('hidden')) alert.removeAttribute('hidden')

}

const move = document.getElementById("move")
const moviment = () => {
	let scr = ''
	Object.keys(arrMove).map(i => {
		if (i < 10) {
			scr =  `<span class="badge badge-info ${arrMove[i]}">${arrMove[i]}</span> ` + scr
		}
	})
	move.innerHTML = scr
}




// BOT ====================================================================

let win = 0
let lose = 0
const elWin = document.getElementById("win")
const elLose = document.getElementById("lose")



const script = document.getElementById("script")
const scriptCheck = document.getElementById("scriptCheck")
const bot = () => {
	if (scriptCheck.checked === false || bet === true) return false

	let scr = script.value
	let arrScr = scr.split(',')

	let vMove = []

	Object.keys(arrMove).map(i => {
		if (i < arrScr.length) {
			vMove.unshift(arrMove[i])
		}
	})

	vMove = vMove.toString()

	if (scr.substring(0,3) === 'XHI') {
		scr = scr.substring(4,scr.length)
		vMove = vMove.substring(3,vMove.length)

		if (parseInt(max) >= parseInt(maxTemp)) {

			if (vMove === scr) {
				console.log('>>>>>>>>> Bot Started in Max HI: ' + maxTemp)
				betButton.click()
			}
		}
		return false
	}


	if (vMove === scr) {
		console.log('>>>>>>>>> Bot Started')
		betButton.click()
	}
}