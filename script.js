const apiKey = 'a6f0e4fa885688122840afeb797ec88d';
const currentWeatherDiv = document.getElementById('current-weather');
const forecastDiv = document.getElementById('forecast');
const cityInputElement = document.getElementById('city-input');
const languageSelectElement = document.getElementById('language');
const appTitleElement = document.getElementById('app-title');
const getWeatherButton = document.getElementById('get-weather-btn');
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
      "placeholder": "Enter your city" // English placeholder
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
      "placeholder": "Введите ваш город" // Russian placeholder
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
      "placeholder": "Introduce tu ciudad" // Spanish placeholder
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
      "placeholder": "Entrez votre ville" // French placeholder
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
      "placeholder": "Geben Sie Ihre Stadt ein" // German placeholder
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
      "placeholder": "Inserisci la tua città" // Italian placeholder
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
      "placeholder": "Insira sua cidade" // Portuguese placeholder
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
      "placeholder": "Wpisz swoje miasto" // Polish placeholder
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
      "placeholder": "Voer uw stad in" // Dutch placeholder
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
      "placeholder": "输入您的城市" // Chinese placeholder
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
      "placeholder": "あなたの都市を入力してください" // Japanese placeholder
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
      "placeholder": "도시를 입력하세요" // Korean placeholder
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
      "placeholder": "أدخل مدينتك" // Arabic placeholder
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
      "placeholder": "Şehrinizi girin" // Turkish placeholder
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
      "placeholder": "अपना शहर दर्ज करें" // Hindi placeholder
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
        "ja": "散発的な雲",
        "ko": "흩어진 구름",
        "ar": "غيوم متفرقة",
        "tr": "dağınık bulutlar",
        "hi": "विखंडित बादल",
        "pt": "nuvens dispersas",
        "pl": "rozproszone chmury",
        "nl": "verspreide wolken"
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
    "thunderstorm": {
        "en": "thunderstorm",
        "es": "tormenta",
        "fr": "orage",
        "de": "Gewitter",
        "it": "temporale",
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

function translateCondition(condition, language) {
  return conditionTranslations[condition][language] || condition;
}

function translateCondition(condition, language) {
  return conditionTranslations[condition][language] || condition;
}

function changeBackground(weatherCondition) {
  // Remove all previous background styles
  document.body.style.backgroundColor = '';

  // Apply the background color based on the translated condition
  if (weatherCondition === 'clear sky' || weatherCondition === 'sunny') {
      document.body.style.backgroundColor = '#87CEFA'; // Light Sky Blue for Clear Sky
  } else if (weatherCondition === 'few clouds') {
      document.body.style.backgroundColor = '#B0C4DE'; // Light Steel Blue for Few Clouds
  } else if (weatherCondition === 'scattered clouds') {
      document.body.style.backgroundColor = '#B0E0E6'; // Powder Blue for Scattered Clouds
  } else if (weatherCondition === 'rain' || weatherCondition === 'shower rain') {
      document.body.style.backgroundColor = '#708090'; // Slate Gray for Rain
  } else if (weatherCondition === 'snow') {
      document.body.style.backgroundColor = '#F0F8FF'; // Alice Blue for Snow
  } else if (weatherCondition === 'thunderstorm') {
      document.body.style.backgroundColor = '#2F4F4F'; // Dark Slate Gray for Thunderstorm
  } else if (weatherCondition === 'mist') {
      document.body.style.backgroundColor = '#D3D3D3'; // Light Gray for Mist
  } else {
      document.body.style.backgroundColor = '#87CEFA'; // Fallback to Light Sky Blue
  }
}

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
      const [currentResponse, forecastResponse] = await Promise.all([fetch(url), fetch(forecastUrl)]);

      if (!currentResponse.ok || !forecastResponse.ok) {
          throw new Error(`Error fetching data: ${currentResponse.status} ${currentResponse.statusText}`);
      }

      const currentWeatherData = await currentResponse.json();
      const forecastData = await forecastResponse.json();

      // Translate the weather condition to English
      const translatedCondition = translateCondition(currentWeatherData.weather[0].description, language);

      // Update background based on the translated condition
      changeBackground(translatedCondition);

      displayCurrentWeather(currentWeatherData, language);
      displayForecast(forecastData, language);
  } catch (error) {
      console.error('Fetch error:', error);
      alert('Could not fetch weather data. Please try again.');
  }
}

// Function to display current weather
function displayCurrentWeather(data, language) {
  const weatherCondition = data.weather[0].description.toLowerCase();
  const weatherDescription = translateCondition(weatherCondition, language);

  // Get the current time in the city's timezone
  const timezoneOffset = data.timezone;
  const localTime = new Date(new Date().getTime() + timezoneOffset * 1000);
  const timeString = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // Display current weather with temperature first
  currentWeatherDiv.innerHTML = `
      <div class="card p-3 mb-3">
          <h2>${translations[language].currentWeatherTitle} ${data.name}</h2>
          <p>${translations[language].temperatureLabel}: ${data.main.temp}°</p>
          <p>${weatherDescription}</p>
          <p>${translations[language].humidityLabel}: ${data.main.humidity}%</p>
          <p>${translations[language].windSpeedLabel}: ${data.wind.speed} m/s</p>
          <p>Current Time: ${timeString}</p>
      </div>
  `;
}

// Function to display the 5-day forecast
function displayForecast(data, language) {
  forecastDiv.innerHTML = '';
  const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
  dailyData.forEach(day => {
      const weatherDescription = translateCondition(day.weather[0].description, language);

      // Append forecast data
      forecastDiv.innerHTML += `
          <div class="col-md-4 mb-3">
              <div class="card p-3 h-100">
                  <p><strong>${new Date(day.dt_txt).toDateString()}</strong></p>
                  <p>${weatherDescription}</p>
                  <p>${translations[language].temperatureLabel}: ${day.main.temp}°</p>
              </div>
          </div>
      `;
  });
}

// Event listener for language change
languageSelectElement.addEventListener('change', function () {
  const language = languageSelectElement.value;
  updateUIForLanguage(language);
  if (currentWeatherDiv.innerHTML) {
      getWeather(); // Refresh weather data in the selected language
  }
});

// Function to update UI text for language
function updateUIForLanguage(language) {
  appTitleElement.textContent = translations[language].appTitle;
  getWeatherButton.textContent = translations[language].getWeatherBtn;
   forecastHeader.textContent = translations[language].forecastHeader;
  // Update placeholder text for the city input field
  cityInputElement.placeholder = translations[language].placeholder;
}

// Event listener for the "Get Weather" button
getWeatherButton.addEventListener('click', getWeather);

// Event listener for "Enter" key press in the city input field
cityInputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission if it's in a form
      getWeather(); // Trigger the weather search when Enter is pressed
  }
});