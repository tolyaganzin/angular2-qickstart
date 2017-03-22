// метаданные для создания компонента
import { Component } from '@angular/core';

// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<child-comp [(userName)]="name"></child-comp>
                <div>Выбранное имя: {{name}}</div>`
})

// клас родительского компонента
export class AppComponent {
    name: string = "Tom";
}
