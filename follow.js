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
  self.xmlHttpReq.onreadystatechange = function() {
    if (self.xmlHttpReq.readyState == 4) {
      updatepage(self.xmlHttpReq.responseText);
    }
  };
  self.xmlHttpReq.send();
}


// curl 'https://app.tradefollow.com.br/resp.asp' -X POST -H 'Origin: https://app.tradefollow.com.br' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: */*' -H 'Referer: https://app.tradefollow.com.br/painel-cliente.asp' -H 'Cookie: _gcl_aw=GCL.1557150725.EAIaIQobChMIvufRvIaH4gIVFAiRCh1MXwi3EAAYASAAEgLtevD_BwE; ASPSESSIONIDCUQRBAAD=MADOFLHAJHLGNAJKICLOGEEI; ASPSESSIONIDAURQAABD=AOMHLFJBDJHKLPKOAEKJHGCM; ASPSESSIONIDAWQTCDCB=AAPKMNCDNIBKJAOFKMCMBPON; ASPSESSIONIDCUQTADCB=BHHBAEMAPMOGGEKKNPINKCAC; ASPSESSIONIDAWTTCDDA=LKFMEBJBKDIAANBAANNMNDGC' -H 'Connection: keep-alive' -H 'Content-Length: 0' --compressed


const arq = "<!POmabewdo=&check;mabewdoPO><!POmabewin=&otimes;mabewinPO><!P.mabewin=0mabewinP.><!ACmabewin=0mabewinAC><!AVmabewin=3mabewinAV><!P.mabewdo=0mabewdoP.><!ACmabewdo=0mabewdoAC><!AVmabewdo=0mabewdoAV><!F.mabewin=66mabewinF.><!F.mabewdo=55mabewdoF.><!F.mabedia=121mabediaF.><!F.mabemes=-268mabemesF.><!POwollwdo=&check;wollwdoPO><!POwollwin=&check;wollwinPO><!P.wollwin=0wollwinP.><!ACwollwin=0wollwinAC><!AVwollwin=0wollwinAV><!P.wollwdo=0wollwdoP.><!ACwollwdo=0wollwdoAC><!AVwollwdo=0wollwdoAV><!F.wollwin=23wollwinF.><!F.wollwdo=-10wollwdoF.><!F.wolldia=13wolldiaF.><!F.wollmes=-632wollmesF.><!POdaniwdo=&check;daniwdoPO><!POdaniwin=&check;daniwinPO><!P.daniwin=0daniwinP.><!ACdaniwin=0daniwinAC><!AVdaniwin=0daniwinAV><!P.daniwdo=0daniwdoP.><!ACdaniwdo=0daniwdoAC><!AVdaniwdo=0daniwdoAV><!F.daniwin=140daniwinF.><!F.daniwdo=-60daniwdoF.><!F.danidia=80danidiaF.><!F.danimes=-2054danimesF.><!POcowbwin=&check;cowbwinPO><!P.cowbwin=0cowbwinP.><!ACcowbwin=0cowbwinAC><!AVcowbwin=0cowbwinAV><!F.cowbwin=158cowbwinF.><!F.cowbdia=158cowbdiaF.><!F.cowbmes=-394cowbmesF.><!POcarlwin=&check;carlwinPO><!P.carlwin=0carlwinP.><!ACcarlwin=0carlwinAC><!AVcarlwin=0carlwinAV><!F.carlwin=-140carlwinF.><!F.carldia=-140carldiaF.><!F.carlmes=-146carlmesF.><!POlucawdo=&check;lucawdoPO><!POlucawin=&otimes;lucawinPO><!POlucabov=&check;lucabovPO><!P.lucawin=-1lucawinP.><!AClucawin=0lucawinAC><!AVlucawin=0lucawinAV><!P.lucawdo=0lucawdoP.><!AClucawdo=0lucawdoAC><!AVlucawdo=0lucawdoAV><!P.lucabov=0lucabovP.><!AClucabov=0lucabovAC><!AVlucabov=0lucabovAV><!F.lucawin=5 (-1)lucawinF.><!F.lucawdo=0lucawdoF.><!F.lucadia=-3lucadiaF.><!F.lucames=-442lucamesF.><!POtjonwdo=&otimes;tjonwdoPO><!POtjonwin=&check;tjonwinPO><!P.tjonwin=0tjonwinP.><!ACtjonwin=0tjonwinAC><!AVtjonwin=0tjonwinAV><!P.tjonwdo=-2tjonwdoP.><!ACtjonwdo=3tjonwdoAC><!AVtjonwdo=3tjonwdoAV><!F.tjonwin=0tjonwinF.><!F.tjonwdo=-95 (-2)tjonwdoF.><!F.tjondia=-95tjondiaF.><!F.tjonmes=-804tjonmesF.><!POgutowin=&check;gutowinPO><!P.gutowin=0gutowinP.><!ACgutowin=0gutowinAC><!AVgutowin=0gutowinAV><!P.gutowdo=0gutowdoP.><!ACgutowdo=0gutowdoAC><!AVgutowdo=0gutowdoAV><!F.gutowin=0gutowinF.><!F.gutowdo=30gutowdoF.><!F.gutodia=30gutodiaF.><!F.gutomes=-81gutomesF.><!POjoaqwdo=&check;joaqwdoPO><!P.joaqwdo=0joaqwdoP.><!ACjoaqwdo=0joaqwdoAC><!AVjoaqwdo=0joaqwdoAV><!F.joaqwdo=-20joaqwdoF.><!F.joaqdia=-20joaqdiaF.><!F.joaqmes=-15joaqmesF.><!POtleowdo=&otimes;tleowdoPO><!P.tleowdo=tleowdoP.><!ACtleowdo=tleowdoAC><!AVtleowdo=tleowdoAV><!F.tleowdo=0tleowdoF.><!F.tleodia=0tleodiaF.><!F.tleomes=0tleomesF.>"
let trds = [
                { name: "cowb", atvs: ["win"], history: [{ date: '', time: '',  d: '', m: '',p: '',f: '',ac: '', av: '' }] }, 
                { name: "carl", atvs: ["win"] },
                { name: "mabe", atvs: ["wdo","win"] },
                { name: "woll", atvs: ["wdo","win"] },
                { name: "guto", atvs: ["wdo","win"] },
                { name: "tjon", atvs: ["wdo","win"] },
                { name: "joaq", atvs: ["wdo"] },
                { name: "tleo", atvs: ["wdo"] },
                { name: "dani", atvs: ["wdo","win"] },
                { name: "luca", atvs: ["wdo","win","bov"] },
            ];

const updatepage2 = (str) => {



}



function updatepage(str) {
  var sj = new Date().getTime() / 1000;

  //var sc = sj.toString().slice(-5);
  var sc = 0;

  var cowbwin = str
    .substring(str.indexOf("!POcowbwin") + 11, str.indexOf(";cowbwinPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var carlwin = str
    .substring(str.indexOf("!POcarlwin") + 11, str.indexOf(";carlwinPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var mabewdo = str
    .substring(str.indexOf("!POmabewdo") + 11, str.indexOf(";mabewdoPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var mabewin = str
    .substring(str.indexOf("!POmabewin") + 11, str.indexOf(";mabewinPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var wollwdo = str
    .substring(str.indexOf("!POwollwdo") + 11, str.indexOf(";wollwdoPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var wollwin = str
    .substring(str.indexOf("!POwollwin") + 11, str.indexOf(";wollwinPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var gutowdo = str
    .substring(str.indexOf("!POgutowdo") + 11, str.indexOf(";gutowdoPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var gutowin = str
    .substring(str.indexOf("!POgutowin") + 11, str.indexOf(";gutowinPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var tjonwdo = str
    .substring(str.indexOf("!POtjonwdo") + 11, str.indexOf(";tjonwdoPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var tjonwin = str
    .substring(str.indexOf("!POtjonwin") + 11, str.indexOf(";tjonwinPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var joaqwdo = str
    .substring(str.indexOf("!POjoaqwdo") + 11, str.indexOf(";joaqwdoPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var tleowdo = str
    .substring(str.indexOf("!POtleowdo") + 11, str.indexOf(";tleowdoPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var daniwdo = str
    .substring(str.indexOf("!POdaniwdo") + 11, str.indexOf(";daniwdoPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var daniwin = str
    .substring(str.indexOf("!POdaniwin") + 11, str.indexOf(";daniwinPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var lucawdo = str
    .substring(str.indexOf("!POlucawdo") + 11, str.indexOf(";lucawdoPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var lucawin = str
    .substring(str.indexOf("!POlucawin") + 11, str.indexOf(";lucawinPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");
  var lucabov = str
    .substring(str.indexOf("!POlucabov") + 11, str.indexOf(";lucabovPO") + 1)
    .replace("&otimes;", "<b style=color:red>&otimes;</b>")
    .replace("&check;", "<b style=color:green>&check;</b>");

  var dcowb = str.substring(
    str.indexOf("!F.cowbdia") + 11,
    str.indexOf("cowbdiaF.")
  );
  var mcowb = str.substring(
    str.indexOf("!F.cowbmes") + 11,
    str.indexOf("cowbmesF.")
  );
  var pcowbwin = str.substring(
    str.indexOf("!P.cowbwin") + 11,
    str.indexOf("cowbwinP.")
  );
  var fcowbwin = str.substring(
    str.indexOf("!F.cowbwin") + 11,
    str.indexOf("cowbwinF.")
  );
  var accowbwin = str.substring(
    str.indexOf("!ACcowbwin") + 11,
    str.indexOf("cowbwinAC")
  );
  var avcowbwin = str.substring(
    str.indexOf("!AVcowbwin") + 11,
    str.indexOf("cowbwinAV")
  );

  var dcarl = str.substring(
    str.indexOf("!F.carldia") + 11,
    str.indexOf("carldiaF.")
  );
  var mcarl = str.substring(
    str.indexOf("!F.carlmes") + 11,
    str.indexOf("carlmesF.")
  );
  var pcarlwin = str.substring(
    str.indexOf("!P.carlwin") + 11,
    str.indexOf("carlwinP.")
  );
  var fcarlwin = str.substring(
    str.indexOf("!F.carlwin") + 11,
    str.indexOf("carlwinF.")
  );
  var accarlwin = str.substring(
    str.indexOf("!ACcarlwin") + 11,
    str.indexOf("carlwinAC")
  );
  var avcarlwin = str.substring(
    str.indexOf("!AVcarlwin") + 11,
    str.indexOf("carlwinAV")
  );

  var dmabe = str.substring(
    str.indexOf("!F.mabedia") + 11,
    str.indexOf("mabediaF.")
  );
  var mmabe = str.substring(
    str.indexOf("!F.mabemes") + 11,
    str.indexOf("mabemesF.")
  );
  var pmabewdo = str.substring(
    str.indexOf("!P.mabewdo") + 11,
    str.indexOf("mabewdoP.")
  );
  var fmabewdo = str.substring(
    str.indexOf("!F.mabewdo") + 11,
    str.indexOf("mabewdoF.")
  );
  var acmabewdo = str.substring(
    str.indexOf("!ACmabewdo") + 11,
    str.indexOf("mabewdoAC")
  );
  var avmabewdo = str.substring(
    str.indexOf("!AVmabewdo") + 11,
    str.indexOf("mabewdoAV")
  );

  var pmabewin = str.substring(
    str.indexOf("!P.mabewin") + 11,
    str.indexOf("mabewinP.")
  );
  var fmabewin = str.substring(
    str.indexOf("!F.mabewin") + 11,
    str.indexOf("mabewinF.")
  );
  var acmabewin = str.substring(
    str.indexOf("!ACmabewin") + 11,
    str.indexOf("mabewinAC")
  );
  var avmabewin = str.substring(
    str.indexOf("!AVmabewin") + 11,
    str.indexOf("mabewinAV")
  );

  var dwoll = str.substring(
    str.indexOf("!F.wolldia") + 11,
    str.indexOf("wolldiaF.")
  );
  var mwoll = str.substring(
    str.indexOf("!F.wollmes") + 11,
    str.indexOf("wollmesF.")
  );
  var pwollwdo = str.substring(
    str.indexOf("!P.wollwdo") + 11,
    str.indexOf("wollwdoP.")
  );
  var fwollwdo = str.substring(
    str.indexOf("!F.wollwdo") + 11,
    str.indexOf("wollwdoF.")
  );
  var acwollwdo = str.substring(
    str.indexOf("!ACwollwdo") + 11,
    str.indexOf("wollwdoAC")
  );
  var avwollwdo = str.substring(
    str.indexOf("!AVwollwdo") + 11,
    str.indexOf("wollwdoAV")
  );

  var pwollwin = str.substring(
    str.indexOf("!P.wollwin") + 11,
    str.indexOf("wollwinP.")
  );
  var fwollwin = str.substring(
    str.indexOf("!F.wollwin") + 11,
    str.indexOf("wollwinF.")
  );
  var acwollwin = str.substring(
    str.indexOf("!ACwollwin") + 11,
    str.indexOf("wollwinAC")
  );
  var avwollwin = str.substring(
    str.indexOf("!AVwollwin") + 11,
    str.indexOf("wollwinAV")
  );

  var dguto = str.substring(
    str.indexOf("!F.gutodia") + 11,
    str.indexOf("gutodiaF.")
  );
  var mguto = str.substring(
    str.indexOf("!F.gutomes") + 11,
    str.indexOf("gutomesF.")
  );
  var pgutowdo = str.substring(
    str.indexOf("!P.gutowdo") + 11,
    str.indexOf("gutowdoP.")
  );
  var fgutowdo = str.substring(
    str.indexOf("!F.gutowdo") + 11,
    str.indexOf("gutowdoF.")
  );
  var acgutowdo = str.substring(
    str.indexOf("!ACgutowdo") + 11,
    str.indexOf("gutowdoAC")
  );
  var avgutowdo = str.substring(
    str.indexOf("!AVgutowdo") + 11,
    str.indexOf("gutowdoAV")
  );

  var pgutowin = str.substring(
    str.indexOf("!P.gutowin") + 11,
    str.indexOf("gutowinP.")
  );
  var fgutowin = str.substring(
    str.indexOf("!F.gutowin") + 11,
    str.indexOf("gutowinF.")
  );
  var acgutowin = str.substring(
    str.indexOf("!ACgutowin") + 11,
    str.indexOf("gutowinAC")
  );
  var avgutowin = str.substring(
    str.indexOf("!AVgutowin") + 11,
    str.indexOf("gutowinAV")
  );

  var djoaq = str.substring(
    str.indexOf("!F.joaqdia") + 11,
    str.indexOf("joaqdiaF.")
  );
  var mjoaq = str.substring(
    str.indexOf("!F.joaqmes") + 11,
    str.indexOf("joaqmesF.")
  );
  var pjoaqwdo = str.substring(
    str.indexOf("!P.joaqwdo") + 11,
    str.indexOf("joaqwdoP.")
  );
  var fjoaqwdo = str.substring(
    str.indexOf("!F.joaqwdo") + 11,
    str.indexOf("joaqwdoF.")
  );
  var acjoaqwdo = str.substring(
    str.indexOf("!ACjoaqwdo") + 11,
    str.indexOf("joaqwdoAC")
  );
  var avjoaqwdo = str.substring(
    str.indexOf("!AVjoaqwdo") + 11,
    str.indexOf("joaqwdoAV")
  );

  var dtleo = str.substring(
    str.indexOf("!F.tleodia") + 11,
    str.indexOf("tleodiaF.")
  );
  var mtleo = str.substring(
    str.indexOf("!F.tleomes") + 11,
    str.indexOf("tleomesF.")
  );
  var ptleowdo = str.substring(
    str.indexOf("!P.tleowdo") + 11,
    str.indexOf("tleowdoP.")
  );
  var ftleowdo = str.substring(
    str.indexOf("!F.tleowdo") + 11,
    str.indexOf("tleowdoF.")
  );
  var actleowdo = str.substring(
    str.indexOf("!ACtleowdo") + 11,
    str.indexOf("tleowdoAC")
  );
  var avtleowdo = str.substring(
    str.indexOf("!AVtleowdo") + 11,
    str.indexOf("tleowdoAV")
  );

  var dtjon = str.substring(
    str.indexOf("!F.tjondia") + 11,
    str.indexOf("tjondiaF.")
  );
  var mtjon = str.substring(
    str.indexOf("!F.tjonmes") + 11,
    str.indexOf("tjonmesF.")
  );
  var ptjonwdo = str.substring(
    str.indexOf("!P.tjonwdo") + 11,
    str.indexOf("tjonwdoP.")
  );
  var ftjonwdo = str.substring(
    str.indexOf("!F.tjonwdo") + 11,
    str.indexOf("tjonwdoF.")
  );
  var actjonwdo = str.substring(
    str.indexOf("!ACtjonwdo") + 11,
    str.indexOf("tjonwdoAC")
  );
  var avtjonwdo = str.substring(
    str.indexOf("!AVtjonwdo") + 11,
    str.indexOf("tjonwdoAV")
  );

  var ptjonwin = str.substring(
    str.indexOf("!P.tjonwin") + 11,
    str.indexOf("tjonwinP.")
  );
  var ftjonwin = str.substring(
    str.indexOf("!F.tjonwin") + 11,
    str.indexOf("tjonwinF.")
  );
  var actjonwin = str.substring(
    str.indexOf("!ACtjonwin") + 11,
    str.indexOf("tjonwinAC")
  );
  var avtjonwin = str.substring(
    str.indexOf("!AVtjonwin") + 11,
    str.indexOf("tjonwinAV")
  );

  var ddani = str.substring(
    str.indexOf("!F.danidia") + 11,
    str.indexOf("danidiaF.")
  );
  var mdani = str.substring(
    str.indexOf("!F.danimes") + 11,
    str.indexOf("danimesF.")
  );
  var pdaniwdo = str.substring(
    str.indexOf("!P.daniwdo") + 11,
    str.indexOf("daniwdoP.")
  );
  var fdaniwdo = str.substring(
    str.indexOf("!F.daniwdo") + 11,
    str.indexOf("daniwdoF.")
  );
  var acdaniwdo = str.substring(
    str.indexOf("!ACdaniwdo") + 11,
    str.indexOf("daniwdoAC")
  );
  var avdaniwdo = str.substring(
    str.indexOf("!AVdaniwdo") + 11,
    str.indexOf("daniwdoAV")
  );

  var pdaniwin = str.substring(
    str.indexOf("!P.daniwin") + 11,
    str.indexOf("daniwinP.")
  );
  var fdaniwin = str.substring(
    str.indexOf("!F.daniwin") + 11,
    str.indexOf("daniwinF.")
  );
  var acdaniwin = str.substring(
    str.indexOf("!ACdaniwin") + 11,
    str.indexOf("daniwinAC")
  );
  var avdaniwin = str.substring(
    str.indexOf("!AVdaniwin") + 11,
    str.indexOf("daniwinAV")
  );

  var dluca = str.substring(
    str.indexOf("!F.lucadia") + 11,
    str.indexOf("lucadiaF.")
  );
  var mluca = str.substring(
    str.indexOf("!F.lucames") + 11,
    str.indexOf("lucamesF.")
  );
  var plucawdo = str.substring(
    str.indexOf("!P.lucawdo") + 11,
    str.indexOf("lucawdoP.")
  );
  var flucawdo = str.substring(
    str.indexOf("!F.lucawdo") + 11,
    str.indexOf("lucawdoF.")
  );
  var aclucawdo = str.substring(
    str.indexOf("!AClucawdo") + 11,
    str.indexOf("lucawdoAC")
  );
  var avlucawdo = str.substring(
    str.indexOf("!AVlucawdo") + 11,
    str.indexOf("lucawdoAV")
  );

  var plucawin = str.substring(
    str.indexOf("!P.lucawin") + 11,
    str.indexOf("lucawinP.")
  );
  var flucawin = str.substring(
    str.indexOf("!F.lucawin") + 11,
    str.indexOf("lucawinF.")
  );
  var aclucawin = str.substring(
    str.indexOf("!AClucawin") + 11,
    str.indexOf("lucawinAC")
  );
  var avlucawin = str.substring(
    str.indexOf("!AVlucawin") + 11,
    str.indexOf("lucawinAV")
  );

  var plucabov = str.substring(
    str.indexOf("!P.lucabov") + 11,
    str.indexOf("lucabovP.")
  );
  var aclucabov = str.substring(
    str.indexOf("!AClucabov") + 11,
    str.indexOf("lucabovAC")
  );
  var avlucabov = str.substring(
    str.indexOf("!AVlucabov") + 11,
    str.indexOf("lucabovAV")
  );

  if (document.getElementById("hora_atual") != null)
    document.getElementById("hora_atual").innerHTML = str;

  if (document.getElementById("fdia_cowboy") != null)
    document.getElementById("fdia_cowboy").innerHTML = "WIN&nbsp;".concat(
      fcowbwin
    );

  if (document.getElementById("dia_cowboy") != null)
    document.getElementById("dia_cowboy").innerHTML = "WIN&nbsp;".concat(
      cowbwin
    );

  if (document.getElementById("dia_cowboy_win") != null)
    document.getElementById(
      "dia_cowboy_win"
    ).innerHTML = "&rarrhk;WIN&nbsp;".concat(cowbwin);

  if (document.getElementById("p_cowboy_win") != null)
    document.getElementById("p_cowboy_win").innerHTML = pcowbwin;

  if (document.getElementById("ac_cowboy_win") != null)
    document.getElementById("ac_cowboy_win").innerHTML = accowbwin;

  if (document.getElementById("av_cowboy_win") != null)
    document.getElementById("av_cowboy_win").innerHTML = avcowbwin;

  if (document.getElementById("f0dia_cowboy") != null)
    document.getElementById("f0dia_cowboy").innerHTML = dcowb;

  if (document.getElementById("mes_cowboy") != null)
    document.getElementById("mes_cowboy").innerHTML = mcowb;
  if (document.getElementById("mesu_cowboy") != null)
    document.getElementById("mesu_cowboy").innerHTML = -mcowb;

  if (document.getElementById("fdia_carlisom") != null)
    document.getElementById("fdia_carlisom").innerHTML = "WIN&nbsp;".concat(
      fcarlwin
    );

  if (document.getElementById("dia_carlisom") != null)
    document.getElementById("dia_carlisom").innerHTML = "WIN&nbsp;".concat(
      carlwin
    );

  if (document.getElementById("dia_carlisom_win") != null)
    document.getElementById(
      "dia_carlisom_win"
    ).innerHTML = "&rarrhk;WIN&nbsp;".concat(carlwin);

  if (document.getElementById("p_carlisom_win") != null)
    document.getElementById("p_carlisom_win").innerHTML = pcarlwin;

  if (document.getElementById("ac_carlisom_win") != null)
    document.getElementById("ac_carlisom_win").innerHTML = accarlwin;

  if (document.getElementById("av_carlisom_win") != null)
    document.getElementById("av_carlisom_win").innerHTML = avcarlwin;

  if (document.getElementById("f0dia_carlisom") != null)
    document.getElementById("f0dia_carlisom").innerHTML = dcarl;

  if (document.getElementById("mes_carlisom") != null)
    document.getElementById("mes_carlisom").innerHTML = mcarl;

  if (document.getElementById("mesu_carlisom") != null)
    document.getElementById("mesu_carlisom").innerHTML = -mcarl;

  if (document.getElementById("fdia_kim") != null)
    document.getElementById("fdia_kim").innerHTML = "WDO&nbsp;".concat(
      fjoaqwdo
    );

  if (document.getElementById("dia_kim") != null)
    document.getElementById("dia_kim").innerHTML = "WDO&nbsp;".concat(joaqwdo);

  if (document.getElementById("dia_kim_wdo") != null)
    document.getElementById(
      "dia_kim_wdo"
    ).innerHTML = "&rarrhk;WDO&nbsp;".concat(joaqwdo);

  if (document.getElementById("p_kim_wdo") != null)
    document.getElementById("p_kim_wdo").innerHTML = pjoaqwdo;

  if (document.getElementById("ac_kim_wdo") != null)
    document.getElementById("ac_kim_wdo").innerHTML = acjoaqwdo;

  if (document.getElementById("av_kim_wdo") != null)
    document.getElementById("av_kim_wdo").innerHTML = avjoaqwdo;

  if (document.getElementById("f0dia_kim") != null)
    document.getElementById("f0dia_kim").innerHTML = djoaq;

  if (document.getElementById("mes_kim") != null)
    document.getElementById("mes_kim").innerHTML = mjoaq;
  if (document.getElementById("mesu_kim") != null)
    document.getElementById("mesu_kim").innerHTML = -mjoaq;

  if (document.getElementById("fdia_leo") != null)
    document.getElementById("fdia_leo").innerHTML = "WDO&nbsp;".concat(
      ftleowdo
    );

  if (document.getElementById("dia_leo") != null)
    document.getElementById("dia_leo").innerHTML = "WDO&nbsp;".concat(tleowdo);

  if (document.getElementById("dia_leo_wdo") != null)
    document.getElementById(
      "dia_leo_wdo"
    ).innerHTML = "&rarrhk;WDO&nbsp;".concat(tleowdo);

  if (document.getElementById("p_leo_wdo") != null)
    document.getElementById("p_leo_wdo").innerHTML = ptleowdo;

  if (document.getElementById("ac_leo_wdo") != null)
    document.getElementById("ac_leo_wdo").innerHTML = actleowdo;

  if (document.getElementById("av_leo_wdo") != null)
    document.getElementById("av_leo_wdo").innerHTML = avtleowdo;

  if (document.getElementById("f0dia_leo") != null)
    document.getElementById("f0dia_leo").innerHTML = dtleo;

  if (document.getElementById("mes_leo") != null)
    document.getElementById("mes_leo").innerHTML = mtleo;
  if (document.getElementById("mesu_leo") != null)
    document.getElementById("mesu_leo").innerHTML = -mtleo;

  if (document.getElementById("fdia_jon") != null)
    document.getElementById("fdia_jon").innerHTML = "WIN&nbsp;"
      .concat(ftjonwin)
      .concat("<br>WDO&nbsp;")
      .concat(ftjonwdo);

  if (document.getElementById("dia_jon") != null)
    document.getElementById("dia_jon").innerHTML = "WIN&nbsp;"
      .concat(tjonwin)
      .concat("<br>WDO&nbsp;")
      .concat(tjonwdo);

  if (document.getElementById("dia_jon_win") != null)
    document.getElementById(
      "dia_jon_win"
    ).innerHTML = "&rarrhk;WIN&nbsp;".concat(tjonwin);

  if (document.getElementById("dia_jon_wdo") != null)
    document.getElementById(
      "dia_jon_wdo"
    ).innerHTML = "&rarrhk;WDO&nbsp;".concat(tjonwdo);

  if (document.getElementById("p_jon_win") != null)
    document.getElementById("p_jon_win").innerHTML = ptjonwin;

  if (document.getElementById("ac_jon_win") != null)
    document.getElementById("ac_jon_win").innerHTML = actjonwin;

  if (document.getElementById("av_jon_win") != null)
    document.getElementById("av_jon_win").innerHTML = avtjonwin;

  if (document.getElementById("p_jon_wdo") != null)
    document.getElementById("p_jon_wdo").innerHTML = ptjonwdo;

  if (document.getElementById("ac_jon_wdo") != null)
    document.getElementById("ac_jon_wdo").innerHTML = actjonwdo;

  if (document.getElementById("av_jon_wdo") != null)
    document.getElementById("av_jon_wdo").innerHTML = avtjonwdo;

  if (document.getElementById("f0dia_jon") != null)
    document.getElementById("f0dia_jon").innerHTML = dtjon;

  if (document.getElementById("mes_jon") != null)
    document.getElementById("mes_jon").innerHTML = mtjon;
  if (document.getElementById("mesu_jon") != null)
    document.getElementById("mesu_jon").innerHTML = -mtjon;

  if (document.getElementById("fdia_mabe") != null)
    document.getElementById("fdia_mabe").innerHTML = "WIN&nbsp;"
      .concat(fmabewin)
      .concat("<br>WDO&nbsp;")
      .concat(fmabewdo);

  if (document.getElementById("dia_mabe") != null)
    document.getElementById("dia_mabe").innerHTML = "WIN&nbsp;"
      .concat(mabewin)
      .concat("<br>WDO&nbsp;")
      .concat(mabewdo);

  if (document.getElementById("dia_mabe_win") != null)
    document.getElementById(
      "dia_mabe_win"
    ).innerHTML = "&rarrhk;WIN&nbsp;".concat(mabewin);

  if (document.getElementById("dia_mabe_wdo") != null)
    document.getElementById(
      "dia_mabe_wdo"
    ).innerHTML = "&rarrhk;WDO&nbsp;".concat(mabewdo);

  if (document.getElementById("p_mabe_win") != null)
    document.getElementById("p_mabe_win").innerHTML = pmabewin;

  if (document.getElementById("ac_mabe_win") != null)
    document.getElementById("ac_mabe_win").innerHTML = acmabewin;

  if (document.getElementById("av_mabe_win") != null)
    document.getElementById("av_mabe_win").innerHTML = avmabewin;

  if (document.getElementById("p_mabe_wdo") != null)
    document.getElementById("p_mabe_wdo").innerHTML = pmabewdo;

  if (document.getElementById("ac_mabe_wdo") != null)
    document.getElementById("ac_mabe_wdo").innerHTML = acmabewdo;

  if (document.getElementById("av_mabe_wdo") != null)
    document.getElementById("av_mabe_wdo").innerHTML = avmabewdo;

  if (document.getElementById("f0dia_mabe") != null)
    document.getElementById("f0dia_mabe").innerHTML = dmabe;

  if (document.getElementById("mes_mabe") != null)
    document.getElementById("mes_mabe").innerHTML = mmabe;
  if (document.getElementById("mesu_mabe") != null)
    document.getElementById("mesu_mabe").innerHTML = -mmabe;

  if (document.getElementById("fdia_guto") != null)
    document.getElementById("fdia_guto").innerHTML = "WIN&nbsp;"
      .concat(fgutowin)
      .concat("<br>WDO&nbsp;")
      .concat(fgutowdo);

  if (document.getElementById("dia_guto") != null)
    document.getElementById("dia_guto").innerHTML = "WIN&nbsp;"
      .concat(gutowin)
      .concat("<br>WDO&nbsp;")
      .concat(gutowdo);

  if (document.getElementById("dia_guto_win") != null)
    document.getElementById(
      "dia_guto_win"
    ).innerHTML = "&rarrhk;WIN&nbsp;".concat(gutowin);

  if (document.getElementById("dia_guto_wdo") != null)
    document.getElementById(
      "dia_guto_wdo"
    ).innerHTML = "&rarrhk;WDO&nbsp;".concat(gutowdo);

  if (document.getElementById("p_guto_win") != null)
    document.getElementById("p_guto_win").innerHTML = pgutowin;

  if (document.getElementById("ac_guto_win") != null)
    document.getElementById("ac_guto_win").innerHTML = acgutowin;

  if (document.getElementById("av_guto_win") != null)
    document.getElementById("av_guto_win").innerHTML = avgutowin;

  if (document.getElementById("p_guto_wdo") != null)
    document.getElementById("p_guto_wdo").innerHTML = pgutowdo;

  if (document.getElementById("ac_guto_wdo") != null)
    document.getElementById("ac_guto_wdo").innerHTML = acgutowdo;

  if (document.getElementById("av_guto_wdo") != null)
    document.getElementById("av_guto_wdo").innerHTML = avgutowdo;

  if (document.getElementById("f0dia_guto") != null)
    document.getElementById("f0dia_guto").innerHTML = dguto;

  if (document.getElementById("mes_guto") != null)
    document.getElementById("mes_guto").innerHTML = mguto;
  if (document.getElementById("mesu_guto") != null)
    document.getElementById("mesu_guto").innerHTML = -mguto;

  if (document.getElementById("fdia_wollof") != null)
    document.getElementById("fdia_wollof").innerHTML = "WIN&nbsp;"
      .concat(fwollwin)
      .concat("<br>WDO&nbsp;")
      .concat(fwollwdo);

  if (document.getElementById("dia_wollof") != null)
    document.getElementById("dia_wollof").innerHTML = "WIN&nbsp;"
      .concat(wollwin)
      .concat("<br>WDO&nbsp;")
      .concat(wollwdo)
      .concat("<br>BOV&nbsp;")
      .concat(wollbov);

  if (document.getElementById("dia_wollof_win") != null)
    document.getElementById(
      "dia_wollof_win"
    ).innerHTML = "&rarrhk;WIN&nbsp;".concat(wollwin);

  if (document.getElementById("dia_wollof_wdo") != null)
    document.getElementById(
      "dia_wollof_wdo"
    ).innerHTML = "&rarrhk;WDO&nbsp;".concat(wollwdo);

  if (document.getElementById("dia_wollof_bov") != null)
    document.getElementById(
      "dia_wollof_bov"
    ).innerHTML = "&rarrhk;BOV&nbsp;".concat(wollbov);

  if (document.getElementById("p_wollof_win") != null)
    document.getElementById("p_wollof_win").innerHTML = pwollwin;

  if (document.getElementById("ac_wollof_win") != null)
    document.getElementById("ac_wollof_win").innerHTML = acwollwin;

  if (document.getElementById("av_wollof_win") != null)
    document.getElementById("av_wollof_win").innerHTML = avwollwin;

  if (document.getElementById("p_wollof_wdo") != null)
    document.getElementById("p_wollof_wdo").innerHTML = pwollwdo;

  if (document.getElementById("ac_wollof_wdo") != null)
    document.getElementById("ac_wollof_wdo").innerHTML = acwollwdo;

  if (document.getElementById("av_wollof_wdo") != null)
    document.getElementById("av_wollof_wdo").innerHTML = avwollwdo;

  if (document.getElementById("f0dia_wollof") != null)
    document.getElementById("f0dia_wollof").innerHTML = dwoll;

  if (document.getElementById("mes_wollof") != null)
    document.getElementById("mes_wollof").innerHTML = mwoll;
  if (document.getElementById("mesu_wollof") != null)
    document.getElementById("mesu_wollof").innerHTML = -mwoll;

  if (document.getElementById("fdia_daniel") != null)
    document.getElementById("fdia_daniel").innerHTML = "WIN&nbsp;"
      .concat(fdaniwin)
      .concat("<br>WDO&nbsp;")
      .concat(fdaniwdo);

  if (document.getElementById("dia_daniel") != null)
    document.getElementById("dia_daniel").innerHTML = "WIN&nbsp;"
      .concat(daniwin)
      .concat("<br>WDO&nbsp;")
      .concat(daniwdo)
      .concat("<br>BOV&nbsp;")
      .concat(danibov);

  if (document.getElementById("dia_daniel_win") != null)
    document.getElementById(
      "dia_daniel_win"
    ).innerHTML = "&rarrhk;WIN&nbsp;".concat(daniwin);

  if (document.getElementById("dia_daniel_wdo") != null)
    document.getElementById(
      "dia_daniel_wdo"
    ).innerHTML = "&rarrhk;WDO&nbsp;".concat(daniwdo);

  if (document.getElementById("dia_daniel_bov") != null)
    document.getElementById(
      "dia_daniel_bov"
    ).innerHTML = "&rarrhk;BOV&nbsp;".concat(danibov);

  if (document.getElementById("p_daniel_win") != null)
    document.getElementById("p_daniel_win").innerHTML = pdaniwin;

  if (document.getElementById("ac_daniel_win") != null)
    document.getElementById("ac_daniel_win").innerHTML = acdaniwin;

  if (document.getElementById("av_daniel_win") != null)
    document.getElementById("av_daniel_win").innerHTML = avdaniwin;

  if (document.getElementById("p_daniel_wdo") != null)
    document.getElementById("p_daniel_wdo").innerHTML = pdaniwdo;

  if (document.getElementById("ac_daniel_wdo") != null)
    document.getElementById("ac_daniel_wdo").innerHTML = acdaniwdo;

  if (document.getElementById("av_daniel_wdo") != null)
    document.getElementById("av_daniel_wdo").innerHTML = avdaniwdo;

  if (document.getElementById("f0dia_daniel") != null)
    document.getElementById("f0dia_daniel").innerHTML = ddani;

  if (document.getElementById("mes_daniel") != null)
    document.getElementById("mes_daniel").innerHTML = mdani;
  if (document.getElementById("mesu_daniel") != null)
    document.getElementById("mesu_daniel").innerHTML = -mdani;

  if (document.getElementById("fdia_lucas") != null)
    document.getElementById("fdia_lucas").innerHTML = "WIN&nbsp;"
      .concat(flucawin)
      .concat("<br>WDO&nbsp;")
      .concat(flucawdo);

  if (document.getElementById("dia_lucas") != null)
    document.getElementById("dia_lucas").innerHTML = "WIN&nbsp;"
      .concat(lucawin)
      .concat("<br>WDO&nbsp;")
      .concat(lucawdo)
      .concat("<br>BOV&nbsp;")
      .concat(lucabov);

  if (document.getElementById("dia_lucas_win") != null)
    document.getElementById(
      "dia_lucas_win"
    ).innerHTML = "&rarrhk;WIN&nbsp;".concat(lucawin);

  if (document.getElementById("dia_lucas_wdo") != null)
    document.getElementById(
      "dia_lucas_wdo"
    ).innerHTML = "&rarrhk;WDO&nbsp;".concat(lucawdo);

  if (document.getElementById("dia_lucas_bov") != null)
    document.getElementById(
      "dia_lucas_bov"
    ).innerHTML = "&rarrhk;BOV&nbsp;".concat(lucabov);

  if (document.getElementById("p_lucas_win") != null)
    document.getElementById("p_lucas_win").innerHTML = plucawin;

  if (document.getElementById("ac_lucas_win") != null)
    document.getElementById("ac_lucas_win").innerHTML = aclucawin;

  if (document.getElementById("av_lucas_win") != null)
    document.getElementById("av_lucas_win").innerHTML = avlucawin;

  if (document.getElementById("p_lucas_wdo") != null)
    document.getElementById("p_lucas_wdo").innerHTML = plucawdo;

  if (document.getElementById("ac_lucas_wdo") != null)
    document.getElementById("ac_lucas_wdo").innerHTML = aclucawdo;

  if (document.getElementById("av_lucas_wdo") != null)
    document.getElementById("av_lucas_wdo").innerHTML = avlucawdo;

  if (document.getElementById("p_lucas_bov") != null)
    document.getElementById("p_lucas_bov").innerHTML = plucabov;

  if (document.getElementById("ac_lucas_bov") != null)
    document.getElementById("ac_lucas_bov").innerHTML = aclucabov;

  if (document.getElementById("av_lucas_bov") != null)
    document.getElementById("av_lucas_bov").innerHTML = avlucabov;

  if (document.getElementById("f0dia_lucas") != null)
    document.getElementById("f0dia_lucas").innerHTML = dluca;

  if (document.getElementById("mes_lucas") != null)
    document.getElementById("mes_lucas").innerHTML = mluca;
  if (document.getElementById("mesu_lucas") != null)
    document.getElementById("mesu_lucas").innerHTML = -mluca;
}

function Left(str, n) {
  if (n <= 0) return "";
  else if (n > String(str).length) return str;
  else return String(str).substring(0, n);
}

function ajaxonline2() {
  var url = location.href;
  if (Left(location.href, 15) == "https://app.tra") {
    JavaScript: xmlhttpPost("https://app.tradefollow.com.br/resp.asp");
  } else {
    JavaScript: xmlhttpPost("https://app.tradefollow.com.br/now.asp");
  }
}
function ajaxonline() {
  ajaxonline2();
  var t = setInterval("ajaxonline2()", 3000);
}
ajaxonline();
