// метаданные для создания компонента
import { Component } from '@angular/core';
// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<p #userName>{{name}}</p>
                <p>{{userName.textContent}}</p>
                <input type="text" [(ngModel)]="name" />`
})
// клас родительского компонента
export class AppComponent{
    name:string="Tom";
}
