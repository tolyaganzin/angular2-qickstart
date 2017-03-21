// метаданные для создания компонента
import { Input, Component } from '@angular/core';

// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
              <p>Возраст пользователя: {{userAge}}</p>`
})
// клас дочернего компонетнта
export class ChildComponent {
  @Input() userName: string;
  @Input() userAge: number;
}
