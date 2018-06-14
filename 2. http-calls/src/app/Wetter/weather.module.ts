import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeatherComponent, WeatherDetailsComponent],
  exports: [WeatherComponent, WeatherDetailsComponent]
})
export class WeatherModule { }
