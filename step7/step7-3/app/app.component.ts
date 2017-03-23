import {
  Component, // декоратор компонента
  ViewChild // декоратор доступа к свойствам локальной переменной компонента
} from '@angular/core';
// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<p #nameParagraph>{{name}}</p>
               <p>{{nameParagraph.textContent}}</p>
               <button (click)="change()">Изменить</button>`
})
// клас родительского компонента
export class AppComponent {
    // компонент
    @ViewChild("nameParagraph")
    nameParagraph: HTMLElement; // приведение типа

    name: string = "Tom";

    // изменение имени по нажатию на кнопку
    change() {
        console.log(this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = "hell";
    }
}
