import {
  Component, // метаданные для создания компонента
  EventEmitter, // свойство для передачи к родительскому компоненту данных события
  Input, //декоратор ввода
  Output // декоратор вывода
} from '@angular/core';

// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'child-comp',
    template: `<input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />`
})
// клас дочернего компонетнта
export class ChildComponent {
    // принимает привязку от родительского компонента
    @Input() userName:string;
    // отправляет привязку от родительского компонента
    @Output() userNameChange = new EventEmitter<string>();
    // по событию изменения текста отправляет данные в родительский компонент
    onNameChange(model: string){
        this.userName = model;
        this.userNameChange.emit(model);
    }
}
