import {
    Component // декоратор компонента
} from '@angular/core';
// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'my-app',
    template: `<child-comp>
                    <h3 #headerContent>Добро пожаловать {{name}}!</h3>
               </child-comp>`
})
// клас родительского компонента
export class AppComponent {
    name: string = "Tom";
}
