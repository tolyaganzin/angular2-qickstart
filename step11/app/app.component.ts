// метаданные для создания компонента
import { Component } from '@angular/core';
// сервисы
import { Response } from '@angular/http';

// selector - название нового компонента (html тега)
// template or templateUrl - содержимое разметки нашего нового компонента
// providers - содержимое регисрацию сервисов
@Component({
    selector: 'my-app',
    styles:[`
       .active {color:red;}
       .nav{ clear: both;}
       a {float: left;}
       .active a { color: red;}
   `],
    template: `<div>
                   <h1>Маршрутизация в Angular 2</h1>

                   <ul class="nav">
                       <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                           <a routerLink="">Главная</a>
                       </li>
                       <li routerLinkActive="active">
                           <a routerLink="/about" routerLinkActive="active">О сайте</a>
                       </li>
                       <li routerLinkActive="active">
                           <a routerLink="/contact" routerLinkActive="active">Контакты с перенаправлением</a>
                       </li>
                       <li routerLinkActive="active">
                           <a [routerLink]="['item', '5']">item 5</a>
                       </li>
                       <li routerLinkActive="active">
                           <a [routerLink]="['item', '8']">item 8</a>
                       </li>
                       <li routerLinkActive="active">
                           <a [routerLink]="['new-item', '5']" [queryParams]="{'product':'phone', 'price': 200}">Phone</a>
                       </li>
                       <li routerLinkActive="active">
                           <a [routerLink]="['new-item', '8']" [queryParams]="{'product':'tablet'}">Tablet</a>
                       </li>
                       <li routerLinkActive="active">
                           <a routerLink="/logout" routerLinkActive="active">Выйти</a>
                       </li>
                       <li routerLinkActive="active">
                           <a routerLink="/bdfj" routerLinkActive="active">Чет не то</a>
                       </li>
                   </ul>
                   <router-outlet></router-outlet>
              </div>`
})
// клас родительского компонента
export class AppComponent implements OnInit {}
