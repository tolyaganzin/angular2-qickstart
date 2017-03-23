//декоратор для создания компонента
import { Component} from '@angular/core';
// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'child-comp',
    template: `<p>{{counter}}</p>`
})
// клас дочернего компонента
export class ChildComponent{

    counter: number = 0;
    // методы инкремента и дикримента класса
    increment() { this.counter++; }
    decrement() { this.counter--; }
}
