import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherInputComponent } from './weather-input/weather-input.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeatherComponent, WeatherInputComponent, WeatherDetailsComponent],
  exports: [WeatherComponent, WeatherInputComponent, WeatherDetailsComponent]
})
export class WeatherModule { }
