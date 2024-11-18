const apiKey = 'cd9dead0b1483495170ad3b6b635ae20';
const currentWeatherDiv = document.getElementById('current-weather');
const forecastDiv = document.getElementById('forecast');
const cityInputElement = document.getElementById('city-input');
const languageSelectElement = document.getElementById('language');
const appTitleElement = document.getElementById('app-title');
const getWeatherButton = document.getElementById('get-weather-btn');
const darkModeButton = document.getElementById('dark-mode-btn');
const forecastHeader = document.getElementById('forecast-header');

const translations = {
    "en": {
        "appTitle": "Only Weather",
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
        "appTitle": "Только Погода",
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
        "appTitle": "Solo Clima",
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
        "appTitle": "Météo Seulement",
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
        "appTitle": "Nur Wetter",
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
        "appTitle": "Solo Meteo",
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
        "appTitle": "Somente Tempo",
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
        "appTitle": "Tylko Pogoda",
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
        "appTitle": "Helder Lucht",
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
        "appTitle": "只有天气",
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
        "appTitle": "天気だけ",
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
        "appTitle": "날씨만",
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
        "appTitle": "فقط الطقس",
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
        "appTitle": "Sadece Hava Durumu",
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
        "appTitle": "सिर्फ मौसम",
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

const conditionTranslations = {
    "clear sky": {
        "en": "clear sky",
        "es": "cielo claro",
        "fr": "ciel dégagé",
        "de": "klarer Himmel",
        "it": "cielo sereno",
        "ru": "ясное небо",
        "zh": "晴天",
        "ja": "晴天",
        "ko": "맑은 하늘",
        "ar": "سماء صافية",
        "tr": "açık hava",
        "hi": "स्पष्ट आकाश",
        "pt": "céu limpo",
        "pl": "czyste niebo",
        "nl": "heldere lucht"
    },
    "few clouds": {
        "en": "few clouds",
        "es": "pocas nubes",
        "fr": "quelques nuages",
        "de": "wenige Wolken",
        "it": "poche nuvole",
        "ru": "малооблачно",
        "zh": "少云",
        "ja": "少し雲",
        "ko": "가벼운 구름",
        "ar": "قليل من الغيوم",
        "tr": "parçalı bulutlu",
        "hi": "थोड़े बादल",
        "pt": "poucas nuvens",
        "pl": "kilka chmur",
        "nl": "weinig wolken"
    },
    "scattered clouds": {
        "en": "scattered clouds",
        "es": "nubes dispersas",
        "fr": "nuages épars",
        "de": "streuende Wolken",
        "it": "nuvole sparse",
        "ru": "переменная облачность",
        "zh": "散云",
        "ja": "散らばった雲",
        "ko": "흩어진 구름",
        "ar": "غائم جزئياً",
        "tr": "dağınık bulutlar",
        "hi": "विखंडित बादल",
        "pt": "nuvens dispersas",
        "pl": "rozproszone chmury",
        "nl": "verspreide wolken"
    },
    "broken clouds": {
        "en": "broken clouds",
        "es": "nubes rotas",
        "fr": "nuages brisés",
        "de": "zerbrochene Wolken",
        "it": "nuvole rotte",
        "ru": "облака разорвались",
        "zh": "破碎的云",
        "ja": "壊れた雲",
        "ko": "부서진 구름",
        "ar": "غيوم متقطعة",
        "tr": "kırık bulutlar",
        "hi": "टूटे हुए बादल",
        "pt": "nuvens quebradas",
        "pl": "rozbite chmury",
        "nl": "gebroken wolken"
    },
    "shower rain": {
        "en": "shower rain",
        "es": "lluvia de chubasco",
        "fr": "pluie d'averse",
        "de": "Schauerregen",
        "it": "pioggia a rovescio",
        "ru": "ливень",
        "zh": "阵雨",
        "ja": "にわか雨",
        "ko": "소나기 비",
        "ar": "زخات مطر",
        "tr": "sağanak yağış",
        "hi": "बौछार बारिश",
        "pt": "chuva de aguaceiro",
        "pl": "deszcz przelotny",
        "nl": "buitje regen"
    },
    "rain": {
        "en": "rain",
        "es": "lluvia",
        "fr": "pluie",
        "de": "Regen",
        "it": "pioggia",
        "ru": "дождь",
        "zh": "雨",
        "ja": "雨",
        "ko": "비",
        "ar": "مطر",
        "tr": "yağmur",
        "hi": "बारिश",
        "pt": "chuva",
        "pl": "deszcz",
        "nl": "regen"
    },
    "thunderstorm": {
        "en": "thunderstorm",
        "es": "tormenta",
        "fr": "orage",
        "de": "Gewitter",
        "it": "tempesta",
        "ru": "гроза",
        "zh": "雷暴",
        "ja": "雷雨",
        "ko": "천둥번개",
        "ar": "عاصفة رعدية",
        "tr": "fırtına",
        "hi": "आंधी-तूफान",
        "pt": "tempestade",
        "pl": "burza",
        "nl": "onweer"
    },
    "snow": {
        "en": "snow",
        "es": "nieve",
        "fr": "neige",
        "de": "Schnee",
        "it": "neve",
        "ru": "снег",
        "zh": "雪",
        "ja": "雪",
        "ko": "눈",
        "ar": "ثلج",
        "tr": "kar",
        "hi": "बर्फ",
        "pt": "neve",
        "pl": "śnieg",
        "nl": "sneeuw"
    },
    "mist": {
        "en": "mist",
        "es": "niebla",
        "fr": "brouillard",
        "de": "Nebel",
        "it": "nebbia",
        "ru": "туман",
        "zh": "雾",
        "ja": "霧",
        "ko": "안개",
        "ar": "ضباب",
        "tr": "sis",
        "hi": "कोहरा",
        "pt": "nevoeiro",
        "pl": "mgła",
        "nl": "mist"
    }
};

// Main function to get weather
async function getWeather() {
    const cityInput = cityInputElement.value.trim();
    if (!cityInput) {
        alert('Please enter a city name');
        return;
    }

    const language = languageSelectElement.value;
    const units = 'metric';

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

        const translatedCondition = translateCondition(currentWeatherData.weather[0].description, language);

        // Change background based on translated condition
        changeBackground(translatedCondition);

        displayCurrentWeather(currentWeatherData, language);
        displayForecast(forecast, language);
    } catch (error) {
        console.error(error);
        alert('Could not fetch weather data. Please try again.');
    }
}

// Function to display current weather
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

// Function to display the 5-day forecast
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

// Translate the weather condition to the correct language
function translateCondition(condition, language) {
    // Check for the condition in the map and return the translation for the selected language
    for (let conditionKey in conditionTranslations) {
        if (conditionTranslations[conditionKey][language] === condition.toLowerCase()) {
            return conditionKey; // Return the condition in English
        }
    }
    return condition; // If no translation found, return the original condition
}

// Change the background based on the weather condition
function changeBackground(weatherCondition) {
    document.body.classList.remove(
        'clear-sky', 'few-clouds', 'scattered-clouds', 'broken-clouds', 
        'rainy', 'shower-rain', 'snowy', 'thunderstorm', 'mist'
    );

    // Apply the correct background class based on the weather condition
    if (weatherCondition === 'clear sky') {
        document.body.classList.add('clear-sky');
    } else if (weatherCondition === 'few clouds') {
        document.body.classList.add('few-clouds');
    } else if (weatherCondition === 'scattered clouds') {
        document.body.classList.add('scattered-clouds');
    } else if (weatherCondition === 'broken clouds') {
        document.body.classList.add('broken-clouds');
    } else if (weatherCondition === 'shower rain') {
        document.body.classList.add('shower-rain');
    } else if (weatherCondition === 'rain') {
        document.body.classList.add('rainy');
    } else if (weatherCondition === 'thunderstorm') {
        document.body.classList.add('thunderstorm');
    } else if (weatherCondition === 'snow') {
        document.body.classList.add('snowy');
    } else if (weatherCondition === 'mist') {
        document.body.classList.add('mist');
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

languageSelectElement.addEventListener('change', function () {
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