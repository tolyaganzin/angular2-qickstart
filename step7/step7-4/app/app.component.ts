import {
  Component, // декоратор компонента
  ViewChild // декоратор доступа к свойствам локальной переменной компонента
} from '@angular/core';
// подключение дочернего компонента
import { ChildComponent } from './child.component';
// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<child-comp></child-comp>
                <button (click)="increment()">+</button>
                <button (click)="decrement()">-</button>`
})
// клас родительского компонента
export class AppComponent {
    // компонент
    @ViewChild(ChildComponent)
    private counterComponent: ChildComponent; // приведение типа

    // методы инкремента и дикримента класса
    increment() { this.counterComponent.increment(); }
    decrement() { this.counterComponent.decrement(); }
}
