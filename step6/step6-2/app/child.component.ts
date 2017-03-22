import {
  Component, //декоратор для создания компонента
  Input, //декоратор ввода
  OnInit, // интерфейс инициализации компонента
  OnChanges, // вызывается до метода ngOnInit(), реагирует на изменение свойств, после начальной инициализации
  SimpleChanges // принимает объект который содержит предыдущие и текущие значения свойства
} from '@angular/core';

// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'child-comp',
    template: `<p>Привет {{name}}</p>`
})
// клас дочернего компонента, который реализовывает интерфейсы: OnInit, OnChanges
export class ChildComponent implements OnInit, OnChanges {
    // принимает привязку от родительского компонента
    @Input() name: string;
    //  конструктор класа компонента (внем вызываеться метод log(str))
    constructor(){ this.log(`constructor`); }
    // инициализация компонента (внем вызываеться метод log(str))
    ngOnInit() { this.log(`onInit`); }
    // реализовывает интерфейс OnChanges
    ngOnChanges(changes: SimpleChanges) {
      this.log(JSON.stringify(changes.name.currentValue));
      for (let propName in changes) {
        let chng = changes[propName];
        let cur  = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
    private log(msg: string) {
        console.log(msg);
    }
}
