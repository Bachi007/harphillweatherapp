import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Weather {
  private apiKey = 'ccbd3949a66bc5b9eb729f12b196fc7a';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}
/**
   * Fetches current weather data for a specified city from OpenWeatherMap API.
  */
  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
