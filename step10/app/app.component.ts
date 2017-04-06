// метаданные для создания компонента
import { Component, OnInit } from '@angular/core';
// сервисы
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { HttpService2 } from './http.service2';
import { HttpService3 } from './http.service3';
import { HttpService4 } from './http.service4';
import { HttpService5 } from './http.service5';
import { User } from './user';
// selector - название нового компонента (html тега)
// templateUrl - содержимое разметки нашего нового компонента
// providers - содержимое регисрацию сервисов
@Component({
    selector: 'my-app',
    templateUrl: `./app/app.template.html`,
    providers: [HttpService, HttpService2, HttpService3, HttpService4, HttpService5]
})
// клас родительского компонента
export class AppComponent implements OnInit {

  user: User;
  users: User[]=[];
  usersData: User[]=[];
  users4: User[]=[];
  error: any;

  constructor(private httpService: HttpService,
              private httpService2: HttpService2,
              private httpService3: HttpService3,
              private httpService4: HttpService4,
              private httpService5: HttpService5
            )
  {}

  ngOnInit(){
     this.httpService.getData().subscribe((data: Response) => this.user=data.json());
     this.httpService2.getData().subscribe((data: Response) => this.users=data.json());
     this.httpService3.getData()
            .subscribe((resp: Response) => {
                let usersList = resp.json().data;
                for(let index in usersList){
                    console.log(usersList[index]);
                    let user = usersList[index];
                    this.usersData.push({name: user.userName + ' 3', age: user.userAge});
                }
            });
     this.httpService4.getUsers().subscribe((data)=>this.users4=data);
     this.httpService5.getUsers()
                        .subscribe(
                            data=>this.users=data,
                            error => {this.error = error; console.log(error);}
                        );
  }
}
