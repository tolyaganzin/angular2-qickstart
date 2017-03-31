// метаданные для создания компонента
import { Component } from '@angular/core';
// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    templateUrl: `./app/app.template.html`
})
// клас родительского компонента
export class AppComponent { }
