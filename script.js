const apiKey = 'cd9dead0b1483495170ad3b6b635ae20'; 
const currentWeatherDiv = document.getElementById('current-weather');
const forecastDiv = document.getElementById('forecast');
const cityInputElement = document.getElementById('city-input');
const languageSelectElement = document.getElementById('language');
const appTitleElement = document.getElementById('app-title');
const getWeatherButton = document.getElementById('get-weather-btn');
const darkModeButton = document.getElementById('dark-mode-btn');
const forecastHeader = document.getElementById('forecast-header'); 

// Full translations for all languages
const translations = {
    "en": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "Get Weather",
        "darkModeBtn": "Dark Mode",
        "currentWeatherTitle": "Current Weather in",
        "forecastHeader": "5-Day Forecast",
        "temperatureLabel": "Temperature",
        "humidityLabel": "Humidity",
        "windSpeedLabel": "Wind Speed",
        "clearSky": "Clear Sky",
        "fewClouds": "Few Clouds",
        "scatteredClouds": "Scattered Clouds",
        "brokenClouds": "Broken Clouds",
        "showerRain": "Shower Rain",
        "rain": "Rain",
        "thunderstorm": "Thunderstorm",
        "snow": "Snow",
        "mist": "Mist"
    },
    "ru": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "Получить Погоду",
        "darkModeBtn": "Тёмный Режим",
        "currentWeatherTitle": "Текущая Погода в",
        "forecastHeader": "Прогноз на 5 дней",
        "temperatureLabel": "Температура",
        "humidityLabel": "Влажность",
        "windSpeedLabel": "Скорость Ветра",
        "clearSky": "Ясное Небо",
        "fewClouds": "Немного Облаков",
        "scatteredClouds": "Рассеянные Облака",
        "brokenClouds": "Разорванные Облака",
        "showerRain": "Дождь",
        "rain": "Дождь",
        "thunderstorm": "Гроза",
        "snow": "Снег",
        "mist": "Туман"
    },
    "es": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "Obtener Clima",
        "darkModeBtn": "Modo Oscuro",
        "currentWeatherTitle": "Clima Actual en",
        "forecastHeader": "Pronóstico 5 Días",
        "temperatureLabel": "Temperatura",
        "humidityLabel": "Humedad",
        "windSpeedLabel": "Velocidad del Viento",
        "clearSky": "Cielo Claro",
        "fewClouds": "Pocas Nubes",
        "scatteredClouds": "Nubes Dispersas",
        "brokenClouds": "Nubes Rotas",
        "showerRain": "Lluvias",
        "rain": "Lluvia",
        "thunderstorm": "Tormenta Eléctrica",
        "snow": "Nieve",
        "mist": "Niebla"
    },
    "fr": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "Obtenir Météo",
        "darkModeBtn": "Mode Sombre",
        "currentWeatherTitle": "Météo Actuelle à",
        "forecastHeader": "Prévisions sur 5 Jours",
        "temperatureLabel": "Température",
        "humidityLabel": "Humidité",
        "windSpeedLabel": "Vitesse du Vent",
        "clearSky": "Ciel Clair",
        "fewClouds": "Quelques Nuages",
        "scatteredClouds": "Nuages Épars",
        "brokenClouds": "Nuages Brisés",
        "showerRain": "Pluie Légère",
        "rain": "Pluie",
        "thunderstorm": "Orage",
        "snow": "Neige",
        "mist": "Brouillard"
    },
    "de": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "Wetter Abrufen",
        "darkModeBtn": "Dunkler Modus",
        "currentWeatherTitle": "Aktuelles Wetter in",
        "forecastHeader": "5-Tage Vorhersage",
        "temperatureLabel": "Temperatur",
        "humidityLabel": "Luftfeuchtigkeit",
        "windSpeedLabel": "Windgeschwindigkeit",
        "clearSky": "Klarer Himmel",
        "fewClouds": "Wenige Wolken",
        "scatteredClouds": "Verstreute Wolken",
        "brokenClouds": "Zerrissene Wolken",
        "showerRain": "Schauer",
        "rain": "Regen",
        "thunderstorm": "Gewitter",
        "snow": "Schnee",
        "mist": "Nebel"
    },
    "it": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "Ottieni Meteo",
        "darkModeBtn": "Modalità Scura",
        "currentWeatherTitle": "Meteo Attuale a",
        "forecastHeader": "Previsioni 5 Giorni",
        "temperatureLabel": "Temperatura",
        "humidityLabel": "Umidità",
        "windSpeedLabel": "Velocità del Vento",
        "clearSky": "Cielo Serene",
        "fewClouds": "Poche Nuvole",
        "scatteredClouds": "Nuvole Sparse",
        "brokenClouds": "Nuvole Spezzate",
        "showerRain": "Pioggia Leggera",
        "rain": "Pioggia",
        "thunderstorm": "Temporale",
        "snow": "Neve",
        "mist": "Nebbia"
    },
    "pt": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "Obter Tempo",
        "darkModeBtn": "Modo Escuro",
        "currentWeatherTitle": "Clima Atual em",
        "forecastHeader": "Previsão 5 Dias",
        "temperatureLabel": "Temperatura",
        "humidityLabel": "Umidade",
        "windSpeedLabel": "Velocidade do Vento",
        "clearSky": "Céu Claro",
        "fewClouds": "Poucas Nuvens",
        "scatteredClouds": "Nuvens Dispersas",
        "brokenClouds": "Nuvens Quebradas",
        "showerRain": "Chuva",
        "rain": "Chuva",
        "thunderstorm": "Trovoada",
        "snow": "Neve",
        "mist": "Névoa"
    },
    "pl": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "Pobierz Pogodę",
        "darkModeBtn": "Tryb Ciemny",
        "currentWeatherTitle": "Aktualna Pogoda w",
        "forecastHeader": "Prognoza na 5 Dni",
        "temperatureLabel": "Temperatura",
        "humidityLabel": "Wilgotność",
        "windSpeedLabel": "Prędkość Wiatru",
        "clearSky": "Czyste Niebo",
        "fewClouds": "Kilka Chmur",
        "scatteredClouds": "Rozproszone Chmury",
        "brokenClouds": "Pęknięte Chmury",
        "showerRain": "Przelotne Deszcze",
        "rain": "Deszcz",
        "thunderstorm": "Burza",
        "snow": "Śnieg",
        "mist": "Mgła"
    },
    "nl": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "Krijg Weer",
        "darkModeBtn": "Donkere Modus",
        "currentWeatherTitle": "Huidig Weer in",
        "forecastHeader": "5-Daagse Voorspelling",
        "temperatureLabel": "Temperatuur",
        "humidityLabel": "Vochtigheid",
        "windSpeedLabel": "Windsnelheid",
        "clearSky": "Helder Lucht",
        "fewClouds": "Weinig Wolken",
        "scatteredClouds": "Verspreide Wolken",
        "brokenClouds": "Gebroken Wolken",
        "showerRain": "Bui Regen",
        "rain": "Regen",
        "thunderstorm": "Onweer",
        "snow": "Sneeuw",
        "mist": "Mist"
    },
    "zh": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "获取天气",
        "darkModeBtn": "暗模式",
        "currentWeatherTitle": "当前天气在",
        "forecastHeader": "五天预报",
        "temperatureLabel": "温度",
        "humidityLabel": "湿度",
        "windSpeedLabel": "风速",
        "clearSky": "晴天",
        "fewClouds": "少量云",
        "scatteredClouds": "散云",
        "brokenClouds": "破云",
        "showerRain": "阵雨",
        "rain": "雨",
        "thunderstorm": "雷暴",
        "snow": "雪",
        "mist": "雾"
    },
    "ja": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "天気を取得",
        "darkModeBtn": "ダークモード",
        "currentWeatherTitle": "現在の天気",
        "forecastHeader": "5日間の予報",
        "temperatureLabel": "温度",
        "humidityLabel": "湿度",
        "windSpeedLabel": "風速",
        "clearSky": "快晴",
        "fewClouds": "少し雲",
        "scatteredClouds": "散発的な雲",
        "brokenClouds": "壊れた雲",
        "showerRain": "シャワー雨",
        "rain": "雨",
        "thunderstorm": "雷雨",
        "snow": "雪",
        "mist": "霧"
    },
    "ko": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "날씨 가져오기",
        "darkModeBtn": "어두운 모드",
        "currentWeatherTitle": "현재 날씨",
        "forecastHeader": "5일 예보",
        "temperatureLabel": "온도",
        "humidityLabel": "습도",
        "windSpeedLabel": "풍속",
        "clearSky": "맑은 하늘",
        "fewClouds": "약간의 구름",
        "scatteredClouds": "흩어진 구름",
        "brokenClouds": "부서진 구름",
        "showerRain": "소나기",
        "rain": "비",
        "thunderstorm": "천둥번개",
        "snow": "눈",
        "mist": "안개"
    },
    "ar": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "الحصول على الطقس",
        "darkModeBtn": "الوضع المظلم",
        "currentWeatherTitle": "الطقس الحالي في",
        "forecastHeader": "توقعات 5 أيام",
        "temperatureLabel": "درجة الحرارة",
        "humidityLabel": "الرطوبة",
        "windSpeedLabel": "سرعة الرياح",
        "clearSky": "سماء صافية",
        "fewClouds": "قليل من السحب",
        "scatteredClouds": "سحب متفرقة",
        "brokenClouds": "سحب مكسورة",
        "showerRain": "زخات مطر",
        "rain": "مطر",
        "thunderstorm": "عاصفة رعدية",
        "snow": "ثلج",
        "mist": "ضباب"
    },
    "tr": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "Hava Durumunu Al",
        "darkModeBtn": "Karanlık Mod",
        "currentWeatherTitle": "Şu Anki Hava Durumu",
        "forecastHeader": "5 Günlük Tahmin",
        "temperatureLabel": "Sıcaklık",
        "humidityLabel": "Nem",
        "windSpeedLabel": "Rüzgar Hızı",
        "clearSky": "Açık Gökyüzü",
        "fewClouds": "Az Bulutlu",
        "scatteredClouds": "Dağınık Bulutlar",
        "brokenClouds": "Parçalanmış Bulutlar",
        "showerRain": "Yağmur",
        "rain": "Yağmur",
        "thunderstorm": "Fırtına",
        "snow": "Kar",
        "mist": "Sis"
    },
    "hi": {
        "appTitle": "OnlyWeathers",
        "getWeatherBtn": "मौसम प्राप्त करें",
        "darkModeBtn": "अंधेरे मोड",
        "currentWeatherTitle": "वर्तमान मौसम",
        "forecastHeader": "5 दिन की भविष्यवाणी",
        "temperatureLabel": "तापमान",
        "humidityLabel": "आर्द्रता",
        "windSpeedLabel": "हवा की गति",
        "clearSky": "स्वच्छ आकाश",
        "fewClouds": "कुछ बादल",
        "scatteredClouds": "विखरे हुए बादल",
        "brokenClouds": "टूटे हुए बादल",
        "showerRain": "बूंदा बांदी",
        "rain": "बारिश",
        "thunderstorm": "आंधी-तूफान",
        "snow": "बर्फ",
        "mist": "कोहरा"
    }
};

let currentWeatherData = null;

async function getWeather() {
    const cityInput = cityInputElement.value.trim();
    if (!cityInput) {
        alert('Please enter a city name');
        return;
    }

    const language = languageSelectElement.value;
    const units = document.querySelector('input[name="unit"]:checked') ? document.querySelector('input[name="unit"]:checked').value : 'metric';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=${units}&lang=${language}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=${units}&lang=${language}&appid=${apiKey}`;

    try {
        const currentResponse = await fetch(url);
        const forecastResponse = await fetch(forecastUrl);

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error('Location not found or API error');
        }

        currentWeatherData = await currentResponse.json();
        const forecast = await forecastResponse.json();

        displayCurrentWeather(currentWeatherData, language);
        displayForecast(forecast, language);
    } catch (error) {
        console.error(error);
        alert('Could not fetch weather data. Please try again.');
    }
}

function displayCurrentWeather(data, language) {
    const weatherDescription = translateCondition(data.weather[0].description, language);

    currentWeatherDiv.innerHTML = `
        <h2>${translations[language].currentWeatherTitle} ${data.name}</h2>
        <p>${weatherDescription}</p>
        <p>${translations[language].temperatureLabel}: ${data.main.temp}°</p>
        <p>${translations[language].humidityLabel}: ${data.main.humidity}%</p>
        <p>${translations[language].windSpeedLabel}: ${data.wind.speed} m/s</p>
    `;
}

function displayForecast(data, language) {
    forecastDiv.innerHTML = '';
    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    dailyData.forEach(day => {
        const weatherDescription = translateCondition(day.weather[0].description, language);
        forecastDiv.innerHTML += `
            <div class="forecast-item">
                <p>${new Date(day.dt_txt).toDateString()}</p>
                <p>${weatherDescription}</p>
                <p>${translations[language].temperatureLabel}: ${day.main.temp}°</p>
            </div>
        `;
    });
}

function translateCondition(condition, language) {
    return translations[language][condition] || condition;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

languageSelectElement.addEventListener('change', () => {
    const language = languageSelectElement.value;
    updateUIForLanguage(language);
    if (currentWeatherData) {
        displayCurrentWeather(currentWeatherData, language);
        displayForecast(currentWeatherData, language);
    }
});

function updateUIForLanguage(language) {
    appTitleElement.textContent = translations[language].appTitle;
    getWeatherButton.textContent = translations[language].getWeatherBtn;
    darkModeButton.textContent = translations[language].darkModeBtn;
    forecastHeader.textContent = translations[language].forecastHeader;
}

getWeatherButton.addEventListener('click', () => {
    getWeather();
});

cityInputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getWeather();
    }
});