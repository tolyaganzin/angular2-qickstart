import { Component, OnInit } from '@angular/core'; // подключаем декоратор и интерфейс
// сервисы
import {DataService} from './data.service'; // сервис данных
import {LogService} from './log.service'; // сервис логирования
import {Phone} from './phone'; // объект данных
// selector - название нового компонента (html тега)
// templateUrl - содержимое разметки нашего нового компонента
@Component({
    selector: 'data-comp',
    templateUrl: `./app/dataComponent/data.template.html`
})
export class DataComponent implements OnInit {

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
}
