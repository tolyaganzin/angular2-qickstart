import {
  Component, // метаданные для создания компонента
  OnInit, // интерфейс инициализации компонента
  OnDestroy // интерфейс разрушение компонента
} from '@angular/core';
// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<p>Hello Angular 2</p>`
})
// клас компонента, который реализовывает интерфейсы: OnInit, OnDestroy
export class AppComponent implements OnInit, OnDestroy {
    name:string="Tom";
    //  конструктор класа компонента (внем вызываеться метод log(str))
    constructor(){ this.log(`constructor`); }
    // инициализация компонента (внем вызываеться метод log(str))
    ngOnInit() { this.log(`onInit`); }
    // разрушение компонента (внем вызываеться метод log(str))
    ngOnDestroy() { this.log(`onDestroy`); }
    // выводит в консоль полученное значение
    private log(msg: string) {
        console.log(msg);
    }
}
