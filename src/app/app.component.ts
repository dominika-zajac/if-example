import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weather = 'normal'

  setWeather(newWeather: string) {
    this.weather = newWeather;
  }
}
