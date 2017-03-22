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
    template: `<button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>`
})
// клас дочернего компонетнта
export class ChildComponent {
    // событие изменения отправляет логическое значение
    @Output() onChanged = new EventEmitter<boolean>();
    // метод, которы по клику на кнопку передаеться главному компоненту
    change(increased) {
      this.onChanged.emit(increased);
    }
}
