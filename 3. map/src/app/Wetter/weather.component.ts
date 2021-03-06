import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData: WeatherObject;
  errormessage;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  requestCity(city) {
    this.weatherData = null;
    this.weatherService.getWeatherData(city).subscribe((data: WeatherObject) => {
      this.weatherData = data;
      this.errormessage = null;
    }, (err) => {
      this.weatherData = null;
      this.errormessage = err.message;
    });
  }
}
