import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly BASE_URL = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) { }

  getWeatherData(city) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.BASE_URL + 'weather?q=' + city + '&units=metric&mode=json&appid=' + environment.appID);
  }

  getCities(city) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.BASE_URL + 'find?q=' + city + '&type=like&units=metric&mode=json&appid=' + environment.appID);
  }
}
