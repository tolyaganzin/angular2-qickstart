// метаданные для создания компонента
import { Component } from '@angular/core';

// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
// styles - стили компонента
@Component({
    selector: 'child-comp',
    template: `<ng-content></ng-content>
                <p>Привет {{name}}</p>`,
    styles: [`h2, p {color:red;}`]
})
// клас дочернего компонетнта
export class ChildComponent {
    name= "Евгений";
}
