var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089')

ws.onopen = function(evt) {
	ws.send(JSON.stringify({ ticks: 'R_100' }))
}

let tick = ''
let arr = []
let max = 0
let min = 999999
let nTickets = 20


ws.onmessage = function(msg) {
	var data = JSON.parse(msg.data)
	tick = data.tick.quote

	addTick(tick)
	onBet(tick)

}

const addTick = tick => {
	if (arr.length >= nTickets) arr.pop()
	arr.unshift(tick)

	max = 0
	min = 999999
	arr.map(t => {
		if (t > max) max = t
		if (t < min) min = t
	})

	$("#max").html(max)
	$("#min").html(min)
	$("#stick").html(tick)

	console.log('>>>>>>')
	console.log(arr.toString())
	console.log('max: ' + max)
	console.log('min: ' + min)
	console.log('aposta: ' + betTick)

	generateChart(arr)
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




let bet = false
let betTick = ''
let arrBet = []

// Trigger button Bet
const betButton = document.getElementById('betbutton')
betButton.addEventListener('click', (e) => { 
	bet = true 
	reset()
})

const reset = () => {
	document.getElementById("betbutton").disabled = true
	$('.sparkline2').sparkline([])
	alert.setAttribute('hidden','')
	arrBet = []
}

// Function save number Beted
const toBet = (tick) => {
	betTick = tick
	arrBet.push(tick)
}


// IF Bet
const onBet = (tick) => {

	 if (bet && betTick === '')  {
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


	if (arrBet.length === 6 ) {
		if(tick > betTick) {
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