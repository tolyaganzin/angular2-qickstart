import {Injectable} from '@angular/core'; //декоратор зависимостей
import {Phone} from './phone'; // сервис для работы с данными
import {LogService} from './log.service'; // сервис для логирования

@Injectable() // служит для встраивания сервиса в другой сервис
export class DataService{

    //инициализация объекта сервиса раьоты сданными
    private data: Phone[] = [
        { name:"Apple iPhone 7", price: 56000},
        { name: "HP Elite x3", price: 56000},
        { name: "Alcatel Idol S4", price: 25000}
    ];
    // задействуем сервис логирования
    constructor(private logService: LogService){}

    // получение данных
    getData(): Phone[] {
        this.logService.write("операция получения данных");
        return this.data;
    }
    // добавление данных
    addData(name: string, price: number){
        this.data.push(new Phone(name, price));
        this.logService.write("операция добавления данных");
    }
}
