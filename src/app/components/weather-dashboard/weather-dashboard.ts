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

  /**
   * Fetches weather data for the entered city using the weather service.
   * If the city field is empty, it exits early.
   * On successful API response, stores the data and updates search history.
   */
  searchCity() {
    if (!this.city) return;

    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data; 
      this.addToHistory(this.city); 
      this.city = ''; // Clear input after search
    });
  }

  /**
   * Adds the searched city to the history array
   */
  addToHistory(city: string) {
    if (this.history.includes(city)) return; // Avoid duplicates
    this.history.unshift(city); // Add to beginning
    if (this.history.length > 5) this.history.pop(); // Keep only 5
  }

  /**
   * Provides outfit suggestions based on current weather conditions.
   */
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
