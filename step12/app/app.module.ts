import { NgModule } from '@angular/core'; // глаавнаная библиотека ангуляра для модулей
import { BrowserModule } from '@angular/platform-browser'; // для взаимодействия с браузером

import { FormsModule } from '@angular/forms'; // для работы с формами и их поля елементами

import { AppComponent } from './app.component'; // родительский компонент

// Фильтры pipes
import { FactorialPipe} from './factorial.pipe'; // факториал фильтр
import { JoinPipe } from './join.pipe'; // join фильтр

@NgModule({
    imports:      [ BrowserModule, FormsModule ], // подключение модулей для компонента
    declarations: [ AppComponent, FactorialPipe, JoinPipe ],
    bootstrap:    [ AppComponent ] // добавляем для сборки, что бы компилятор собрал
})
// модуль, который будет подтягиваться при импорте в главный инициализации и запуска
export class AppModule { }
