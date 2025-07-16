import { Component } from '@angular/core';
import { Weather } from '../../services/weather';

@Component({
  selector: 'app-weather-dashboard',
  standalone: false,
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.css'
})
export class WeatherDashboard {
city: string = '';
  weatherData: any;
  history: string[] = [];

  constructor(private weatherService: Weather) {}

  searchCity() {
    if (!this.city) return;

    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      this.addToHistory(this.city);
      this.city = '';
    });
  }

  addToHistory(city: string) {
    if (this.history.includes(city)) return;
    this.history.unshift(city);
    if (this.history.length > 5) this.history.pop();
  }

  getOutfitSuggestion(): string {
    if (!this.weatherData) return '';
    const temp = this.weatherData.main.temp;
    const condition = this.weatherData.weather[0].main.toLowerCase();

    if (condition.includes('rain')) return 'Take an umbrella ☔';
    if (temp < 15) return 'Wear a jacket 🧥';
    if (condition.includes('clear')) return 'Sunglasses suggested 😎';
    return 'Dress comfortably 👕';
  }
}
