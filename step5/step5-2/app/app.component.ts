// метаданные для создания компонента
import { Component } from '@angular/core';

// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
// styles - стили компонента
@Component({
    selector: 'my-app',
    template: `<child-comp><h2>Добро пожаловать {{name}}!</h2></child-comp>`,
    styles: [`h2, p {color:#333;}`]
})

// клас родительского компонента
export class AppComponent {
    name = 'Tom';
}
