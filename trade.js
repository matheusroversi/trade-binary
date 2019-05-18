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
	onAposta(tick)
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
	console.log('aposta: ' + apostaTick)

	generateChart(arr)
}

const generateChart = arr => {

	var arr2 = []
	arr.map(t => {
		arr2.unshift(t)
	})
	$('.sparkline').sparkline(arr2, { 	
										width: '200px', 
									 	height: '100px', 
										maxSpotColor: '#3232ff', 
										minSpotColor: '#ff0000', 
										spotColor: '#6ec96e',
										lineColor: '#6ec96e',
										spotRadius: 3,
										fillColor: '#e9f4de'
										})

	if (aposta) {
	$('.sparkline2').sparkline(arr2, { 	
								width: '200px', 
								height: '100px', 
								maxSpotColor: '#3232ff', 
								minSpotColor: '#ff0000', 
								spotColor: '#6ec96e',
								lineColor: '#6ec96e',
								spotRadius: 3,
								fillColor: 'transparent',
								normalRangeMax: tick,
								normalRangeMin: apostaTick
								})


	} else {
		$('.sparkline2').sparkline()
	}
}




let aposta = false
let apostaTick = ''
let arrAposta = []

const betButton = document.getElementById('betbutton')
betButton.addEventListener('click', (e) => {
	aposta = true;
})

const apostar = (tick) => {
	
	
}

const onAposta = (tick) => {

	if (aposta === true && apostaTick === '') {
		apostar(data.tick.quote)
	}

	apostaTick = tick

}
