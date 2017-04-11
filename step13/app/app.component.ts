import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {Observable} from 'rxjs/Observable';
import {User} from './user';

@Component({
    selector: 'my-app',
    template: `
    <div class="container jumbotron">
      <ul>
        <li *ngFor="let user of users | async">
          <p>Имя пользователя: {{user.name}}</p>
          <p>Возраст пользователя: {{user.age}}</p>
        </li>
      </ul>
    </div>
                `,
    providers: [HttpService]
})
export class AppComponent implements OnInit {

    users: Observable<User[]>;
    constructor(private httpService: HttpService){}
    ngOnInit(){

         this.users = this.httpService.getUsers();
    }
}
