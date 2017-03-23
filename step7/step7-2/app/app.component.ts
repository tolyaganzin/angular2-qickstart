// метаданные для создания компонента
import { Component } from '@angular/core';
// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<child-comp #counter></child-comp>
                <button (click)="counter.increment()">+</button>
                <button (click)="counter.decrement()">-</button>`
})
// клас родительского компонента
export class AppComponent { }
