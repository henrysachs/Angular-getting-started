import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() weatherData: WeatherObject;

  constructor() { }

  ngOnInit() {
    console.log(this.weatherData);
  }

}
