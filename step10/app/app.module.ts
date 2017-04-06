import { NgModule }      from '@angular/core'; // глаавнаная библиотека ангуляра для модулей
import { BrowserModule } from '@angular/platform-browser'; // для взаимодействия с браузером
import { FormsModule }   from '@angular/forms'; // для работы с формами и их поля елементами
import { AppComponent }   from './app.component'; // родительский компонент
import { HttpModule }   from '@angular/http'; // для запросов к серверу
@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule ], // подключение модулей для компонента
    declarations: [ AppComponent ], // декларируем собственные компоненты
    bootstrap:    [ AppComponent ] // добавляем для сборки, что бы компилятор собрал
})
// модуль, который будет подтягиваться при импорте в главный инициализации и запуска
export class AppModule { }
