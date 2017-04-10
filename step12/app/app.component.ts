// метаданные для создания компонента
import { Component } from '@angular/core';

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
}
