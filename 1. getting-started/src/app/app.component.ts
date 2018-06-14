import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees = [
    {name: 'Max', wohnort: 'Frankfurt'},
    {name: 'Moritz', wohnort: 'Berlin'}
  ];
}
