var doToday = doToday || (function (settings) {
	var settings = settings || {};
	settings.UILanguage = chrome.i18n.getUILanguage();
	"chrome://favicon/http://ozon.travel/";
	return {
		
	};
})();

var showDetailsSunrise = function () {
	var sunriseDetails = document.getElementById("sunriseDetails");
	var sunrise = document.getElementById("sunrise");
	
	if (parseInt(sunriseDetails.style.opacity)) {
		sunriseDetails.style.opacity = "0.0";
		sunrise.style.opacity = "1.0";		
	} else {
		sunriseDetails.style.opacity = "1.0";
		sunrise.style.opacity = "0.0";
	}
};

var showDetailsSunset = function () {
	var sunsetDetails = document.getElementById("sunsetDetails");
	var sunset = document.getElementById("sunset");
	
	if (parseInt(sunsetDetails.style.opacity)) {
		sunsetDetails.style.opacity = "0.0";
		sunset.style.opacity = "1.0";		
	} else {
		sunsetDetails.style.opacity = "1.0";
		sunset.style.opacity = "0.0";
	}
};

var showDetails = setInterval(
	function()
	{
		showDetailsSunrise();
		showDetailsSunset();
		console.log("showDetails");
		
	},
	5000
);

var dayInfo = {
    article: "",
    setArticle: function(a) {
        dayInfo.article = a;
        document.getElementById("dailyInfoArticle").innerText = dayInfo.article;
		document.cookie = "dailyInfoArticle=" + dayInfo.article;
    }
};

function getZodiacSign(day, month) {
 
  var zodiacSigns = {
    'capricorn':'♑',
    'aquarius':'♒',
    'pisces':'♓',
    'aries':'♈',
    'taurus':'♉',
    'gemini':'♊',
    'cancer':'♋',
    'leo':'♌',
    'virgo':'♍',
    'libra':'♎',
    'scorpio':'♏',
    'sagittarius':'♐'
  }
 
  if((month == 0 && day <= 20) || (month == 11 && day >=22)) {
    return zodiacSigns.capricorn;
  } else if ((month == 0 && day >= 21) || (month == 1 && day <= 18)) {
    return zodiacSigns.aquarius;
  } else if((month == 1 && day >= 19) || (month == 2 && day <= 20)) {
    return zodiacSigns.pisces;
  } else if((month == 2 && day >= 21) || (month == 3 && day <= 20)) {
    return zodiacSigns.aries;
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return zodiacSigns.taurus;
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return zodiacSigns.gemini;
  } else if((month == 5 && day >= 22) || (month == 6 && day <= 22)) {
    return zodiacSigns.cancer;
  } else if((month == 6 && day >= 23) || (month == 7 && day <= 23)) {
    return zodiacSigns.leo;
  } else if((month == 7 && day >= 24) || (month == 8 && day <= 23)) {
    return zodiacSigns.virgo;
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return zodiacSigns.libra;
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 22)) {
    return zodiacSigns.scorpio;
  } else if((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return zodiacSigns.sagittarius;
  }
}

var weather = {
	main: "",
	description:"",
	weatherIcon: "",
	
	setWeather: function(w){
		weather.main = w;
		document.getElementById("weather").innerText = weather.main;
		document.cookie = "weather=" + weather.main;
	},
	setWeatherDescription: function(w){
		weather.description = w;
		document.getElementById("weather").innerText = weather.description;
		document.cookie = "weather=" + weather.description;
	},
	setWeatherIcon: function(w){
		weather.weatherIcon = w;
		document.getElementById("weatherBlock").style.backgroundImage="url('img/weather/" + weather.weatherIcon + ".png')";
		document.cookie = "weatherIcon=" + weather.weatherIcon;
	}
};

var temperature = {
	temperatureCurrent: 0,
	temperatureMax: 0,
	temperatureMin: 0,
	setCurrentTemp: function(t) {
		this.temperatureCurrent = Math.round(t - 273.15);
		document.getElementById("temperatureCurrent").innerText = temperature.temperatureCurrent + "°C";
		document.cookie = "temperatureCurrent=" + temperature.temperatureCurrent + "°C";
	},
	setMaxTemp: function(t) {
		this.temperatureMax = Math.round(t - 273.15);
		document.getElementById("temperatureMax").innerText = "↑" + temperature.temperatureMax;
		document.cookie = "temperatureMax=" + "↑" + temperature.temperatureMax;
	},
	setMinTemp: function(t) {
		this.temperatureMin = Math.round(t - 273.15);
		document.getElementById("temperatureMin").innerText = "↓" + temperature.temperatureMin;
		document.cookie = "temperatureMin=" + "↓" + temperature.temperatureMin;
	}
	
}

var today = {
	now: new Date(),
	getMonth: function() {
		var month = new Array();
		month[0] = chrome.i18n.getMessage("month_january");
		month[1] = chrome.i18n.getMessage("month_february");
		month[2] = chrome.i18n.getMessage("month_march");
		month[3] = chrome.i18n.getMessage("month_april");
		month[4] = chrome.i18n.getMessage("month_may");
		month[5] = chrome.i18n.getMessage("month_june");
		month[6] = chrome.i18n.getMessage("month_july");
		month[7] = chrome.i18n.getMessage("month_august");
		month[8] = chrome.i18n.getMessage("month_september");
		month[9] = chrome.i18n.getMessage("month_october");
		month[10] = chrome.i18n.getMessage("month_november");
		month[11] = chrome.i18n.getMessage("month_december");
		return month[today.now.getMonth()];
	},
	getDayOfWeek: function() {
		var weekday = new Array(7);
		weekday[0]=  chrome.i18n.getMessage("weekday_sunday");
		weekday[1] = chrome.i18n.getMessage("weekday_monday");
		weekday[2] = chrome.i18n.getMessage("weekday_tuesday");
		weekday[3] = chrome.i18n.getMessage("weekday_wednesday");
		weekday[4] = chrome.i18n.getMessage("weekday_thursday");
		weekday[5] = chrome.i18n.getMessage("weekday_friday");
		weekday[6] = chrome.i18n.getMessage("weekday_saturday");
		return weekday[this.now.getDay()];
	}
};

var exchangeRate = {
    USD: 0.0,
    USDDiff: 0.0,
    EUR: 0.0,
    EURDiff: 0.0,
    setUSD: function(val) {
        exchangeRate.USD = val;
        document.getElementById("USD").innerText = "$" + exchangeRate.USD.toFixed(4);
		document.cookie =  "USD=$" + exchangeRate.USD.toFixed(4);
    },
    setUSDDiff: function(val) {
        exchangeRate.USDDiff = val;
        document.getElementById("diffIndicatorUSD").innerText = (exchangeRate.USDDiff > 0) ? "▲" : "▼";
        document.getElementById("USDDiff").innerText = exchangeRate.USDDiff || "0.0000";
		document.cookie = "USDDiff=" + exchangeRate.USDDiff;
    },    
    setEUR: function(val) {
        exchangeRate.EUR = val;
        document.getElementById("EUR").innerText = "€" + exchangeRate.EUR.toFixed(4);
		document.cookie =  "EUR=€" + exchangeRate.EUR.toFixed(4);
    },
    setEURDiff: function(val) {
        exchangeRate.EURDiff = val;
        document.getElementById("diffIndicatorEUR").innerText = (exchangeRate.EURDiff > 0) ? "▲" : "▼";
        document.getElementById("EURDiff").innerText = exchangeRate.EURDiff || "0.0000";
		document.cookie = "EURDiff=" + exchangeRate.EURDiff;
    }
};

var dayLength = {
	sunrise: new Date(),
	sunset: new Date(),
	getSunrise: function() {
		return new Date(this.sunrise * 1000);
	},
	getSunset: function() {
		return new Date(this.sunset * 1000);
	},
	setSunrise: function(sunrise) {
		this.sunrise = sunrise;
		var sunriseTimeHours = (this.getSunrise(this.sunrise).getHours().toString().length < 2) ? "0" + this.getSunrise(this.sunrise).getHours() : this.getSunrise(this.sunrise).getHours();
		var sunriseTimeMinutes = (this.getSunrise(this.sunrise).getMinutes().toString().length < 2) ? "0" + this.getSunrise(this.sunrise).getMinutes() : this.getSunrise(this.sunrise).getMinutes();		
		var sunriseTime ="☉ ⇑ " + sunriseTimeHours + ":" + sunriseTimeMinutes;
		document.getElementById("sunrise").innerText = sunriseTime;
		document.cookie = "sunrise=" + sunriseTime;
		//retutn (this.getSunrise(this.sunrise))().getHours() + ":" + (this.getSunrise(this.sunrise))().getMinutes();
	},
	setSunset: function(sunset) {
		this.sunset = sunset;
		var sunsetTimeHours = (this.getSunset(this.sunset).getHours().toString().length < 2) ? "0" + this.getSunset(this.sunset).getHours() : this.getSunset(this.sunset).getHours();
		var sunsetTimeMinutes = (this.getSunset(this.sunset).getMinutes().toString().length < 2) ? "0" + this.getSunset(this.sunset).getMinutes() : this.getSunset(this.sunset).getMinutes();
		var sunsetTime ="☉ ⇓ " + sunsetTimeHours + ":" + sunsetTimeMinutes;
		document.getElementById("sunset").innerText = sunsetTime;
		document.cookie = "sunset=" + sunsetTime;
		//retutn (this.getSunset(this.sunset))().getHours() + ":" + (this.getSunset(this.sunset))().getMinutes();
	}
};

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function init() {
	document.getElementById("sunset").innerText = getCookie("sunset") || "00:00";
	document.getElementById("sunrise").innerText = getCookie("sunrise") || "00:00";
	document.getElementById("temperatureCurrent").innerText = getCookie("temperatureCurrent") || "0";
	document.getElementById("temperatureMax").innerText = getCookie("temperatureMax") || "0";
	document.getElementById("temperatureMin").innerText = getCookie("temperatureMin") || "0";
	document.getElementById("weather").innerText = getCookie("weather") || "...";
	document.getElementById("dailyInfoArticle").innerText = getCookie("dailyInfoArticle") || "...";
	document.getElementById("USD").innerText = getCookie("USD") || "0.0000";
	//document.getElementById("USDDiff").innerText = getCookie("USDDiff") || "";
	exchangeRate.setUSDDiff(getCookie("USDDiff") || "0.0000");
	document.getElementById("EUR").innerText = getCookie("EUR") || "0.0000";
	//document.getElementById("EURDiff").innerText = getCookie("EURDiff") || 0.0000;
	exchangeRate.setEURDiff(getCookie("EURDiff") || "0.0000");
	//weather.setWeatherIcon(getCookie("weatherIcon") || "");
}

window.onload = function() {
	//debugger;
	init();
	document.getElementById("month").innerText = today.getMonth();
	document.getElementById("dailyInfoTitle").innerText = chrome.i18n.getMessage("daily_info_title");
	document.getElementById("dayOfWeek").innerText = today.getDayOfWeek();
	document.getElementById("dayOfMonth").innerText = today.now.getDate();
	document.getElementById("zodiac").innerText = getZodiacSign(today.now.getDate(),today.now.getMonth());
    getLocation();
    //var xhrWiki = new XMLHttpRequest();
    //var d = today.getMonth() + "_" + today.now.getDate();
    //xhrWiki.open("GET", "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + d + "&format=json", true);
   // xhrWiki.onreadystatechange = function() {
      //if (xhrWiki.readyState == 4) {
	    //var resp = JSON.parse(xhrWiki.responseText);
	    //dayInfo.setArticle(resp[2][0]);
     // }
    //}
    //xhrWiki.send();
	chrome.topSites.get(loadTopSites);
};

function loadTopSites(data) {
	var i = 0,
		topSites = data,
		tiles = document.getElementsByClassName("tile");
		
	for(;i < 8; i += 1) {
		if (topSites[i]) {
			tiles[i].querySelector(".tile-url").innerText = topSites[i].url.split("//")[1].split("/")[0];
			tiles[i].querySelector(".tile-url").style.backgroundImage="url('chrome://favicon/" + topSites[i].url + "')";	
			tiles[i].querySelector(".tile-title").innerText = topSites[i].title;		
			tiles[i].parentElement.setAttribute("href", topSites[i].url);
		}
	}
}

function getLocationError(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};

function getLocation() {
    var options = {timeout:60000};
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,getLocationError,options);
    } else {
        //x.innerHTML = "Geolocation is not supported by this browser.";
    }
}



function showPosition(position) {
    //x.innerHTML = "Latitude: " + position.coords.latitude + 
    //"<br>Longitude: " + position.coords.longitude; 
    var latitude = position.coords.latitude.toFixed(2);
    var longitude = position.coords.longitude.toFixed(2);
	var language = chrome.i18n.getUILanguage();
	var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://dotoday.comuv.com/?&latitude=" + latitude + "&longitude=" + longitude + "&language=" + language, true);
    //xhr.open("GET", "http://dotoday.comuv.com/?&latitude=" + latitude + "&longitude=" + longitude, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be evaluating an evil script!
        //var resp = eval("(" + xhr.responseText + ")");
	    //debugger;
        var resp = JSON.parse(xhr.responseText.split("\n")[0].trim());
	    //var resp = JSON.parse(xhr.responseText);
	    
	    

	    dayLength.setSunrise(resp.sys.sunrise);
	    dayLength.setSunset(resp.sys.sunset);
	    temperature.setCurrentTemp(resp.main.temp);
	    temperature.setMaxTemp(resp.main.temp_max);
	    temperature.setMinTemp(resp.main.temp_min);
	    //weather.setWeather(resp.weather[0].main);
	    weather.setWeatherDescription(resp.weather[0].description);
		
	    //weather.setWeatherIcon(resp.weather[0].icon);
	    
        exchangeRate.setUSD(resp.exchangeRate["USD"]);
        exchangeRate.setUSDDiff(resp.exchangeRate["USDDiff"]);
        exchangeRate.setEUR(resp.exchangeRate["EUR"]);
        exchangeRate.setEURDiff(resp.exchangeRate["EURDiff"]);
	    
	    var tmpId = Math.round((Math.random() * (resp.events.length - 1)) );
		if(resp.events[tmpId]) {
			dayInfo.setArticle("в " + resp.events[tmpId].year + " " + resp.events[tmpId].description);
			document.getElementById("dailyInfoImg").setAttribute("href", "img/" + resp.events[tmpId].image);
		} else {
			dayInfo.setArticle("...");
		}
	    //document.getElementById("sunrise").innerText = dayLength.setSunrise(resp.sys.sunrise);
	    //document.getElementById("sunset").innerText = dayLength.setSunset(resp.sys.sunset);
      }
    }
    xhr.send();
}



