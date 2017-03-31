import { NgModule }      from '@angular/core'; // глаавнаная библиотека ангуляра для модулей
import { BrowserModule } from '@angular/platform-browser'; // для взаимодействия с браузером
import { FormsModule }   from '@angular/forms'; // для работы с формами и их поля елементами
import { AppComponent }   from './app.component'; // родительский компонент
// Директивы
import { BoldDirective0 }   from './directives/bold0.directive';
import { BoldDirective1 }   from './directives/bold1.directive';
import { BoldDirective2 }   from './directives/bold2.directive';
import { BoldDirective3 }   from './directives/bold3.directive';
import { BoldDirective4 }   from './directives/bold4.directive';
import { BoldDirective5 }   from './directives/bold5.directive';
import { BoldDirective6 }   from './directives/bold6.directive';
@NgModule({
    imports:      [ BrowserModule, FormsModule ], // подключение модулей для компонента
    declarations: [ AppComponent,
      BoldDirective0, BoldDirective1, BoldDirective2,
      BoldDirective3, BoldDirective4, BoldDirective5,
      BoldDirective6
    ], // декларируем собственные компоненты
    bootstrap:    [ AppComponent ] // добавляем для сборки, что бы компилятор собрал
})
// модуль, который будет подтягиваться при импорте в главный инициализации и запуска
export class AppModule { }
