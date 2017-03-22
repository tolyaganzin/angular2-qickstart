import { Component, //декоратор компонента
         Input, //декоратор ввода данных
         OnInit, //интерфейс инициализации свойств
         DoCheck, //интерфейс чекает после установки свойств
         OnChanges, //интерфейс чекает до установки свойств
         AfterContentInit, //интерфейс инициализация контента
         AfterContentChecked, //интерфейс изменение контента
         AfterViewChecked, //интерфейс изменение свойств в представлении
         AfterViewInit //интерфейс загруска свойств в представлении
       } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Привет {{name}}</p>`
})
export class ChildComponent implements OnInit,
         DoCheck,
         OnChanges,
         AfterContentInit,
         AfterContentChecked,
         AfterViewChecked,
         AfterViewInit  {
    @Input() name: string;
    count:number=1;

    //интерфейс инициализации свойств
    ngOnInit() {
      this.log(`ngOnInit`);
    }
    //интерфейс чекает до установки свойств
    ngOnChanges() {
      this.log(`OnChanges`);
    }
    //интерфейс чекает после установки свойств
    ngDoCheck() {
      this.log(`ngDoCheck`);
    }
    //интерфейс загруска свойств в представлении
    ngAfterViewInit() {
      this.log(`ngAfterViewInit`);
    }
    //интерфейс изменение свойств в представлении
    ngAfterViewChecked() {
      this.log(`ngAfterViewChecked`);
    }
    //интерфейс инициализация контента
    ngAfterContentInit() {
      this.log(`ngAfterContentInit`);
    }
    //интерфейс изменение контента
    AfterViewChecked, //интерфейс изменение свойств в пред
    ngAfterContentChecked() {
      this.log(`ngAfterContentChecked`);
    }

    private log(msg: string) {
        console.log(this.count + ". " + msg);
        this.count++;
    }
}
