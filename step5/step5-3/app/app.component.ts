// метаданные для создания компонента
import { Component } from '@angular/core';

// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<h2>Количество кликов: {{clicks}}</h2>
              <child-comp (onChanged)="onChanged($event)"></child-comp>`
})

// клас родительского компонента
export class AppComponent {
    clicks:number = 0;
    onChanged(increased){
        increased==true?this.clicks++:this.clicks--;
    }
}
