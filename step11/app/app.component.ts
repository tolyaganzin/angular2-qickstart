// метаданные для создания компонента
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// сервисы
import { Response } from '@angular/http';

export class Item{

    id: number;
    product: string;
    price: number;
}

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
                   <h1 (click)="toHome()">Маршрутизация в Angular 2</h1>

                    <div  class="form-group">
                      <h3>Параметры объекта</h3>
                      <input type="number" placeholder="id" [(ngModel)]="item.id" class="form-control" /><br />
                      <input type="number"  placeholder="price" [(ngModel)]="item.price" class="form-control" /><br />
                      <input  placeholder="product" [(ngModel)]="item.product" class="form-control" /><br />
                      <button (click)="goToItem(item)" class="btn">Перейти</button>
                    </div>

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
export class AppComponent {

  item: Item=new Item();

  constructor(private router: Router){}

  goToItem(myItem: Item){

      this.router.navigate(
          ['/new-item', myItem.id],
          {
              queryParams:{
                  'product': myItem.product,
                  'price': myItem.price
              }
          }
      );
  }

  toHome() : void {
      this.router.navigate(['']);
  }
}
