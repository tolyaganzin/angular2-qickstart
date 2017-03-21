// метаданные для создания компонента
import { Component } from '@angular/core';

// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
// styles - стили компонента
@Component({
    selector: 'my-app',
    template: `<child-comp></child-comp>
                <p>Привет {{name}}</p>`,
    styles: [`h2, p {color:#333;}`]
})

// клас родительского компонента
export class AppComponent {
    name = 'Петр';
}
