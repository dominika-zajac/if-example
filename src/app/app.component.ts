import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pogoda = "normalnie"
  wybranyObrazek = "https://github.com/dominika-zajac/if-example/blob/master/src/assets/base.png?raw=true"

  setWeather(newWeather: string) {
    this.pogoda = newWeather;
    this.wybierzObrazek();
  }

  wybierzObrazek() {
    if(this.pogoda === "słonecznie") {
      this.załóżOkularyPrzeciwsłoneczne()
    }
    if(this.pogoda === "deszczowo") {
      this.zabierzParasol()
    } 
    if (this.pogoda === "normalnie") {
      this.nicNieZabieraj()
    }
  }


  załóżOkularyPrzeciwsłoneczne() {
    this.wybranyObrazek = "https://github.com/dominika-zajac/if-example/blob/master/src/assets/sunny.png?raw=true"
  }

  zabierzParasol() {
    this.wybranyObrazek = "https://github.com/dominika-zajac/if-example/blob/master/src/assets/rainy.png?raw=true"
  }

  nicNieZabieraj() {
    this.wybranyObrazek = "https://github.com/dominika-zajac/if-example/blob/master/src/assets/base.png?raw=true"
  }
}
