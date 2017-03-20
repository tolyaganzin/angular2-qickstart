// app/app.component.ts
import {Component} from 'angular2/core'; //подтягивает метаданные
//инициализирут данные
@Component({
    selector: 'my-app', //ищет в index.html  компонет указанного типа
    template: '<h1>My First Angular 2 App</h1>' //заполняет указнный компонент
})
export class AppComponent { } //клас (модуль) компонета
