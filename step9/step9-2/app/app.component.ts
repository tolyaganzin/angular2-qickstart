// метаданные для создания компонента
import { Component, OnInit} from '@angular/core';

// selector - название нового компонента (html тега)
// template - содержимое разметки нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<data-comp></data-comp>
               <data-comp></data-comp>`
})
// клас родительского компонента
export class AppComponent implements OnInit {
}
