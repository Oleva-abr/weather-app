import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = 'snow';
  city: string = "Brovary";
  iconUrl: string = ""
  units: string = 'metric'


  constructor(private WeatherService: WeatherService) { }

  ngOnInit(): void {
    this.WeatherService.getweather(this.city, this.units).subscribe({
      next: (res) => {
        this.myWeather = res
        console.log(this.myWeather)
        this.temperature = Math.floor(this.myWeather.main.temp)
        this.feelsLikeTemp = Math.floor(this.myWeather.main.feels_like)
        this.humidity = this.myWeather.main.humidity
        this.pressure = this.myWeather.main.pressure
        this.summary = this.myWeather.weather[0].description
        this.city = this.myWeather.name
        this.iconUrl = `https://openweathermap.org/img/wn/${this.myWeather.weather[0].icon}@2x.png`
      },

      error: (error) => console.log(error),
      complete: () => console.info('API call completed')
    })

  }
}
