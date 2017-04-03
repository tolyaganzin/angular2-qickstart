// метаданные для создания компонента
import { Component, OnInit} from '@angular/core';
// сервисы
import {DataService} from './data.service';
import {LogService} from './log.service';
import {Phone} from './phone';
// selector - название нового компонента (html тега)
// templateUrl - содержимое разметки нашего нового компонента
// styleUrls - содержимое стилей нашего нового компонента
@Component({
    selector: 'my-app',
    templateUrl: `./app/app.template.html`,
    styleUrls: ['./app/app.styles.css'],
    providers: [DataService, LogService]
})
// клас родительского компонента
export class AppComponent implements OnInit {

    items: Phone[] = [];
    constructor(private dataService: DataService){}

    addItem(name: string, price: number){

        this.dataService.addData(name, price);
    }
    ngOnInit(){
        this.items = this.dataService.getData();
    }
}
