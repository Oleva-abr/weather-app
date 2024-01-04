import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  API_KEY = '3ed4949b440e94fa7e1487e0b633baac';

  getweather(city: string, units: string) {
    return this.http.get(`${this.BASE_URL}?q=${city}&appid=${this.API_KEY}&units=${units}`)
  }
}
