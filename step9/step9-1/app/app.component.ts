// метаданные для создания компонента
import { Component, OnInit} from '@angular/core';
// сервисы
import {DataService} from './data.service';
import {LogService} from './log.service';
import {Phone} from './phone';
// selector - название нового компонента (html тега)
// templateUrl - содержимое разметки нашего нового компонента
// providers - содержимое регисрацию сервисов
@Component({
    selector: 'my-app',
    templateUrl: `./app/app.template.html`,
    providers: [DataService, LogService]
})
// клас родительского компонента
export class AppComponent implements OnInit {

  // объявление объекта
  items: Phone[] = [];
  // иницализация сервиса
  constructor(private dataService: DataService){}

  // визов у сервиса метода добавления
  addItem(name: string, price: number){
      this.dataService.addData(name, price);
  }
  // визов у сервиса метода инициализации
  ngOnInit(){
      this.items = this.dataService.getData();

}
