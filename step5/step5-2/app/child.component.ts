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
    _userAge: number;

   @Input()
   set userAge(age:number) {
       if(age<0)
           this._userAge=0;
       else if(age>100)
           this._userAge=100;
       else
           this._userAge = age;
    }
    get userAge() { return this._userAge; }
}
