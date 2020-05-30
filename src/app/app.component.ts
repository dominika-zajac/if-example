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
    if (this.pogoda === "normalnie") {
      this.nicNieZabieraj()
    }
    /*
    Uzupełnij funkcję!
    Jezeli pogoda to "słonecznie" -> this.załóżOkularyPrzeciwsłoneczne()
    Jezeli "deszczowo" -> this.zabierzParasol()

    Podpowiedź: komenda if wygląda tak:
    if (sprawdzanaWartosc === "oczekiwanaWartosc") {
      wykonajAkcje()
    }
    a to jaką mamy pogodę ukrywa się pod zmienną:
    this.pogoda
    */
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
