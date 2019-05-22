
const arq = '<!POmabewdo=&check;mabewdoPO><!POmabewin=&check;mabewinPO><!P.mabewin=0mabewinP.><!ACmabewin=0mabewinAC><!AVmabewin=0mabewinAV><!P.mabewdo=0mabewdoP.><!ACmabewdo=0mabewdoAC><!AVmabewdo=0mabewdoAV><!F.mabewin=120mabewinF.><!F.mabewdo=55mabewdoF.><!F.mabedia=175mabediaF.><!F.mabemes=-93mabemesF.><!POwollwdo=&check;wollwdoPO><!POwollwin=&check;wollwinPO><!P.wollwin=0wollwinP.><!ACwollwin=0wollwinAC><!AVwollwin=0wollwinAV><!P.wollwdo=0wollwdoP.><!ACwollwdo=0wollwdoAC><!AVwollwdo=0wollwdoAV><!F.wollwin=-113wollwinF.><!F.wollwdo=-170wollwdoF.><!F.wolldia=-283wolldiaF.><!F.wollmes=-915wollmesF.><!POdaniwdo=&check;daniwdoPO><!POdaniwin=&check;daniwinPO><!P.daniwin=0daniwinP.><!ACdaniwin=0daniwinAC><!AVdaniwin=0daniwinAV><!P.daniwdo=0daniwdoP.><!ACdaniwdo=0daniwdoAC><!AVdaniwdo=0daniwdoAV><!F.daniwin=140daniwinF.><!F.daniwdo=-60daniwdoF.><!F.danidia=80danidiaF.><!F.danimes=-1974danimesF.><!POcowbwin=&check;cowbwinPO><!P.cowbwin=0cowbwinP.><!ACcowbwin=0cowbwinAC><!AVcowbwin=0cowbwinAV><!F.cowbwin=158cowbwinF.><!F.cowbdia=158cowbdiaF.><!F.cowbmes=-236cowbmesF.><!POcarlwin=&check;carlwinPO><!P.carlwin=0carlwinP.><!ACcarlwin=0carlwinAC><!AVcarlwin=0carlwinAV><!F.carlwin=-140carlwinF.><!F.carldia=-140carldiaF.><!F.carlmes=-286carlmesF.><!POlucawdo=&check;lucawdoPO><!POlucawin=&check;lucawinPO><!POlucabov=&check;lucabovPO><!P.lucawin=0lucawinP.><!AClucawin=0lucawinAC><!AVlucawin=0lucawinAV><!P.lucawdo=0lucawdoP.><!AClucawdo=0lucawdoAC><!AVlucawdo=0lucawdoAV><!P.lucabov=0lucabovP.><!AClucabov=0lucabovAC><!AVlucabov=0lucabovAV><!F.lucawin=70lucawinF.><!F.lucawdo=10lucawdoF.><!F.lucadia=72lucadiaF.><!F.lucames=-370lucamesF.><!POtjonwdo=&check;tjonwdoPO><!POtjonwin=&check;tjonwinPO><!P.tjonwin=0tjonwinP.><!ACtjonwin=0tjonwinAC><!AVtjonwin=0tjonwinAV><!P.tjonwdo=0tjonwdoP.><!ACtjonwdo=0tjonwdoAC><!AVtjonwdo=0tjonwdoAV><!F.tjonwin=0tjonwinF.><!F.tjonwdo=-55tjonwdoF.><!F.tjondia=-55tjondiaF.><!F.tjonmes=-859tjonmesF.><!POgutowin=&check;gutowinPO><!P.gutowin=0gutowinP.><!ACgutowin=0gutowinAC><!AVgutowin=0gutowinAV><!P.gutowdo=0gutowdoP.><!ACgutowdo=0gutowdoAC><!AVgutowdo=0gutowdoAV><!F.gutowin=0gutowinF.><!F.gutowdo=30gutowdoF.><!F.gutodia=30gutodiaF.><!F.gutomes=-51gutomesF.><!POjoaqwdo=&check;joaqwdoPO><!P.joaqwdo=0joaqwdoP.><!ACjoaqwdo=0joaqwdoAC><!AVjoaqwdo=0joaqwdoAV><!F.joaqwdo=-20joaqwdoF.><!F.joaqdia=-20joaqdiaF.><!F.joaqmes=-35joaqmesF.><!POtleowdo=&otimes;tleowdoPO><!P.tleowdo=tleowdoP.><!ACtleowdo=tleowdoAC><!AVtleowdo=tleowdoAV><!F.tleowdo=0tleowdoF.><!F.tleodia=0tleodiaF.><!F.tleomes=0tleomesF.><div class="market-status"> <table border=0><tr><td><span></span></td><td>App Online (v4.2.86_1.2.41) </td></tr><tr><td colspan=2><i style=font-size:12px;><b style=color:blue>21/05/2019 21:20:45</b> (h&aacute; 2s)</span></td></tr></table></div><!BLOQ_NEW>'

String.prototype.replaceAll = String.prototype.replaceAll || function (needle, replacement) {
	return this.split(needle).join(replacement);
};

const DB = 'history-follow'
let objHistory = []
const start = 9
const end = 17


if (localStorage.getItem(DB) !== undefined) {
	objHistory = JSON.parse(localStorage.getItem(DB))
}

const returnArray = (data) => {
	data = data.substring(0, data.indexOf("<div")).replaceAll('<!', '').replaceAll('&check;', true).replaceAll('&otimes;', false).split(">")
	let arr = []

	data.map(item => {
		if (item !== '') {
			item = item.substring(0, item.length - 9)
			arr.push({
				trade: item.substring(2, 6),
				sigla: item.substring(0, 2),
				active: item.substring(6, 9),
				value: item.substring(10, item.length)
			})
		}
	})

	return arr
}

const existTradeInObj = (trade, obj) => {
	x = obj.filter(i => { return i.id === trade })
	if (x.length > 0) { return true }
	return false
}

const updatepage2 = (data) => {

	D = new Date()
	d = D.getDate() + '-' + (D.getMonth() + 1) + '-' + D.getFullYear()
	t = D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds()

	let arr = returnArray(data)
	arr.map(item => {

		// Create trade
		if (objHistory[item.trade] === undefined) {
			objHistory[item.trade] = { atvs: [] }
			objHistory[item.trade]['history'] = []
		}

		if (item.active === 'dia') {
			objHistory[item.trade].history.push({ day: d, time: t, value: item.value })
		} else if (item.active === 'mes') {
			objHistory[item.trade].month = item.value
		} else {
			if (objHistory[item.trade].atvs.indexOf(item.active) === -1) {
				objHistory[item.trade].atvs.push(item.active)
			}
		}

	})

	// Save on LocalStorage
	localStorage.setItem(DB, JSON.stringify(objHistory))

}


function xmlhttpPost(strURL) {
	var xmlHttpReq = false;
	var self = this;

	// Mozilla/Safari
	if (window.XMLHttpRequest) {
		self.xmlHttpReq = new XMLHttpRequest();
	}
	// IE
	else if (window.ActiveXObject) {
		self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}
	self.xmlHttpReq.open("POST", strURL, true);
	self.xmlHttpReq.setRequestHeader(
		"Content-Type",
		"application/x-www-form-urlencoded"
	);
	self.xmlHttpReq.onreadystatechange = function () {
		if (self.xmlHttpReq.readyState == 4) {
			updatepage2(self.xmlHttpReq.responseText);
		}
	};
	self.xmlHttpReq.send();
}


function ajaxonline2() {
	JavaScript: xmlhttpPost("https://app.tradefollow.com.br/resp.asp");
}
function ajaxonline() {
	ajaxonline2();
	var t = setInterval("ajaxonline2()", 10000);
}
ajaxonline();
