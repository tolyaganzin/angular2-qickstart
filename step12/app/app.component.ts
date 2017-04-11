// метаданные для создания компонента
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

// selector - название нового компонента (html тега)
// template or templateUrl - содержимое разметки нашего нового компонента

@Component({
    selector: 'my-app',
    templateUrl: `./app/app.template.html`
})
// клас родительского компонента
export class AppComponent {

  myDate = new Date(1961, 3, 12);
  pi: number = 3.1415;
  money: number = 23.45;
  welcome: string = "Hello World!";
  persentage: number = 0.14;
  x: number = 120;
  phones = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];
  phones2 = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];

  phone3: Observable<string>;
    constructor() { this.showPhones(); }

    showPhones() {
        this.phone3 = Observable.interval(500).map(i=> this.phones[i]);
    }
}
