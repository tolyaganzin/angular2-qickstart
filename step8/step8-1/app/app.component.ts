// метаданные для создания компонента
import { Component } from '@angular/core';
// selector - название нового компонента (html тега)
// templateUrl - содержимое разметки нашего нового компонента
// styleUrls - содержимое стилей нашего нового компонента
@Component({
    selector: 'my-app',
    templateUrl: `./app/app.template.html`,
    styleUrls: ['./app/app.styles.css']
})
// клас родительского компонента
export class AppComponent {
    // ngClass
    visibility: boolean = true;
    // переключаем переменную
    toggleVisibility(){
       this.visibility=!this.visibility;
    }

    // *ngIf
    condition: boolean=true;
    // переключаем переменную
    toggleCondition(){
       this.condition=!this.condition;
    }

    // *ngFor
    items =["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];

    // ngSwitch
    count: number = 5;

}
