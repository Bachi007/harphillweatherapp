🌤️ Weather-Based Outfit Recommender
A responsive Angular app that fetches weather data by city name and recommends appropriate outfits based on temperature and weather conditions. Includes a sleek UI built with Angular Material and Bootstrap and features a cool rain animation!

🧩 Features
🔍 City Search – Enter any city name to fetch real-time weather

🌡️ Weather Info – Displays temperature, weather condition, wind speed, and humidity

🧥 Outfit Suggestion – Smart clothing suggestions based on weather

🕓 Search History – Shows the last 5 cities searched (in-memory)

🌧️ Rain Animation – Beautiful animated rain effect in the background

💅 Modern UI – Built with Angular Material & Bootstrap for responsiveness

🧱 Component Overview
Component	Purpose
AppComponent (app.component.ts)	Main container, renders layout and rain animation
WeatherDashboardComponent (weather-dashboard.component.ts)	Handles city search, weather display, outfit logic, and history
WeatherService (weather.service.ts)	Responsible for fetching weather data from OpenWeatherMap API

🚀 Getting Started
📦 Prerequisites
Node.js and npm

Angular CLI

🛠️ Installation
bash
Copy
Edit
# Clone the repository
git clone https://github.com/your-username/weather-outfit-app.git
cd weather-outfit-app

# Install dependencies
npm install
⚙️ Configuration
Open weather.service.ts and replace with your API key:

ts
Copy
Edit
private apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
You can get one from: https://openweathermap.org/api

