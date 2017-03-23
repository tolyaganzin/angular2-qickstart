import {
    Component, // декоратор для создания компонента
    ContentChild //декоратор для доступа к локальным переменным родительского компонента
} from '@angular/core';
// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'child-comp',
    template: `<ng-content></ng-content>
               <button (click)="change()">Изменить</button>`
})
// клас дочернего компонента
export class ChildComponent{
    // компонент родитель
    @ContentChild("headerContent")
    header: HTMLElement; // приведение типа
    // событие изменения
    change() {
        console.log(this.header);
        this.header.nativeElement.textContent = "Hell to world!";
    }
}
