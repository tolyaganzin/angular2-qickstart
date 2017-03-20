import { Component } from '@angular/core'; //метаданные для компонента

// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<label>Введите имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>`
})
// клас, который будет подтягиваться при импорте в модуль
export class AppComponent {
    name = 'teamgeist';
}
