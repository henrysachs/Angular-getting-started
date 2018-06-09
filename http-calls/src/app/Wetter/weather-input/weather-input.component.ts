import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.css']
})
export class WeatherInputComponent implements OnInit {

  weatherData;
  errormessage;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  requestCity(city) {
    this.weatherService.getWeatherData(city).subscribe((data) => {
      this.weatherData = data;
      this.errormessage = null;
    }, (err) => {
      this.weatherData = null;
      this.errormessage = err.message;
    });
  }
}
