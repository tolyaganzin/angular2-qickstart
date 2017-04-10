import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'item-info',
    styles:[`
       .active {color:red;}
       .nav{ clear: both;}
       a {float: left;}
       .active a { color: red;}
   `],
    template: `<h3>Модель {{id}}</h3>
              <ul class="nav">
                  <li routerLinkActive="active" >
                    <a routerLink="/item/5/details" routerLinkActive="active">Информация о товаре</a>
                  </li>
                  <li routerLinkActive="active" >
                    <a routerLink="/item/5/stat" routerLinkActive="active">Статистика товара</a>
                  </li>
              </ul>

              <router-outlet></router-outlet>`
})
export class ItemComponent implements OnDestroy {

  private id: number;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute){

      this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
}
