var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089')

ws.onopen = function (evt) {
	ws.send(JSON.stringify({ ticks: 'R_100' }))
}

let tick = ''
let arr = []
let arrMove = []
let max = 0
let min = 999999
let mov
let nTickets = 20

const maxBadge = document.getElementById('max')
const minBadge = document.getElementById('min')
const tickBadge = document.getElementById('tick')


ws.onmessage = function (msg) {
	var data = JSON.parse(msg.data)
	data.tick.quote

	addTick(data.tick.quote) // Save new tick in array
	onBet(data.tick.quote)   // For function Bet

}

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
	})

	maxBadge.textContent = max
	minBadge.textContent = min
	tickBadge.textContent = tick


	// How Movement Tick Do. ([ HIGH - UP - DOWN - LOW ] = [ HI - UP - DO - LO ])
	if (value <= min) {
		mov = 'LO'
	} else if (tick >= max) {
		mov = 'HI'
	}
	arrMove.unshift(mov)
	console.log(arrMove)


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
		} else {
			// Ganhou
			status('Ganhou! =D', 'success')
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
