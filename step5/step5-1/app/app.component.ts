// метаданные для создания компонента
import { Component } from '@angular/core';

// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<child-comp [userName]="name" [userAge]="age"></child-comp>
                <input type="text" [(ngModel)]="name" />`
})

// клас родительского компонента
export class AppComponent {
    name:string = 'Tom';
    age:number = 24;
}
