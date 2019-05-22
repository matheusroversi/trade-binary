const util = require("util");
const qs = require("qs");
const axios = require("axios");

String.prototype.replaceAll =
  String.prototype.replaceAll ||
  function(needle, replacement) {
    return this.split(needle).join(replacement);
  };

const DB = "history-follow";
let objHistory = [];
const start = 9;
const end = 17;

//if (localStorage.getItem(DB) !== undefined && localStorage.getItem(DB) !== null && localStorage.getItem(DB) !== '') {
//	objHistory = JSON.parse(localStorage.getItem(DB))
//}

const returnArray = data => {
  data = data
    .substring(0, data.indexOf("<div"))
    .replaceAll("<!", "")
    .replaceAll("&check;", true)
    .replaceAll("&otimes;", false)
    .split(">");
  let arr = [];

  data.map(item => {
    if (item !== "") {
      item = item.substring(0, item.length - 9);
      arr.push({
        trade: item.substring(2, 6),
        sigla: item.substring(0, 2),
        active: item.substring(6, 9),
        value: item.substring(10, item.length)
      });
    }
  });

  return arr;
};

const existTradeInObj = (trade, obj) => {
  x = obj.filter(i => {
    return i.id === trade;
  });
  if (x.length > 0) {
    return true;
  }
  return false;
};

const updatePage_2 = data => {
  D = new Date();
  d = D.getDate() + "-" + (D.getMonth() + 1) + "-" + D.getFullYear();
  t = D.getHours() + ":" + D.getMinutes() + ":" + D.getSeconds();

  let arr = returnArray(data);
  console.log("arr", arr);
  arr.map(item => {
    // Create trade
    if (objHistory[item.trade] === undefined) {
      objHistory[item.trade] = { atvs: [] };
      objHistory[item.trade]["history"] = [];
    }

    if (item.active === "dia") {
      objHistory[item.trade].history.push({
        day: d,
        time: t,
        value: item.value
      });
    } else if (item.active === "mes") {
      objHistory[item.trade].month = item.value;
    } else {
      if (objHistory[item.trade].atvs.indexOf(item.active) === -1) {
        objHistory[item.trade].atvs.push(item.active);
      }
    }
  });

  return objHistory;
  // Save on LocalStorage
  // localStorage.setItem(DB, JSON.stringify(objHistory))
};


const X_POST = async url => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "_ga=GA1.3.1064978812.1557147076; _fbp=fb.2.1557147076380.731540517; _gac_UA-118137306-1=1.1557150725.EAIaIQobChMIvufRvIaH4gIVFAiRCh1MXwi3EAAYASAAEgLtevD_BwE; _gcl_aw=GCL.1557150725.EAIaIQobChMIvufRvIaH4gIVFAiRCh1MXwi3EAAYASAAEgLtevD_BwE; ASPSESSIONIDCUQRBAAD=MADOFLHAJHLGNAJKICLOGEEI; ASPSESSIONIDAURQAABD=AOMHLFJBDJHKLPKOAEKJHGCM; ASPSESSIONIDAWQTCDCB=AAPKMNCDNIBKJAOFKMCMBPON; ASPSESSIONIDCUQTADCB=BHHBAEMAPMOGGEKKNPINKCAC; ASPSESSIONIDAWTTCDDA=FBLBJCJBDNCDLBKAPGHEKGOD; ASPSESSIONIDCURTDDCA=HCIGEKFCIDDNLAHCBBLLCPKF",
      Host: "app.tradefollow.com.br"
    }
  };

  let result;
  try {
    result = await axios.post(url, {}, config);
  } catch (e) {
    console.log("Error: ", e);
  }
  let t = updatePage_2(result.data);
  console.log(util.inspect(t, false, null, true /* enable colors */));
};

let Cookie = "";
const Login = async () => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Host: "app.tradefollow.com.br",
      Origin: "https://app.tradefollow.com.br",
      Referer: "https://app.tradefollow.com.br/",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
      Cookie:
        "_ga=GA1.3.1064978812.1557147076; _fbp=fb.2.1557147076380.731540517; _gac_UA-118137306-1=1.1557150725.EAIaIQobChMIvufRvIaH4gIVFAiRCh1MXwi3EAAYASAAEgLtevD_BwE; _gcl_aw=GCL.1557150725.EAIaIQobChMIvufRvIaH4gIVFAiRCh1MXwi3EAAYASAAEgLtevD_BwE; ASPSESSIONIDCUQRBAAD=MADOFLHAJHLGNAJKICLOGEEI; ASPSESSIONIDAURQAABD=AOMHLFJBDJHKLPKOAEKJHGCM; ASPSESSIONIDAWQTCDCB=AAPKMNCDNIBKJAOFKMCMBPON; ASPSESSIONIDCUQTADCB=BHHBAEMAPMOGGEKKNPINKCAC; ASPSESSIONIDAWTTCDDA=FBLBJCJBDNCDLBKAPGHEKGOD; ASPSESSIONIDCURTDDCA=FBLDILFCOGKAEMKGAMJIKNGA"
    }
  };

  let result;
  try {
    result = await axios.post(
      "https://app.tradefollow.com.br/?A=Painel&Login=1",

      qs.stringify({ user: "32660500886", senha: "roversi00" }),
      config
    );
  } catch (e) {
    console.log("Error: ", e);
  }
  let t = result;
  Cookie = result.headers.Cookie;
  console.log(result.config.headers.Cookie);
};

const ajaxRequest = () => {
  JavaScript: X_POST("https://app.tradefollow.com.br/resp.asp");
};
const getData = () => {
  ajaxRequest();
  var t = setInterval(ajaxRequest(), 10000);
};

Login();
