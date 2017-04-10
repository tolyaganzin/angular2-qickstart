import { NgModule } from '@angular/core'; // глаавнаная библиотека ангуляра для модулей
import { BrowserModule } from '@angular/platform-browser'; // для взаимодействия с браузером

import { FormsModule } from '@angular/forms'; // для работы с формами и их поля елементами
import { HttpModule } from '@angular/http'; // для запросов к серверу
import { Routes, RouterModule } from '@angular/router'; // для работы с маршрутами

import { AppComponent } from './app.component'; // родительский компонент
import { AboutComponent } from './about.component'; // компонент домашней страници
import { HomeComponent } from './home.component'; // компонент про проект
import { ItemComponent }   from './item.component'; // компонент с объектом
import { ItemStatComponent }   from './item.stat.component'; // дочерний компонент статистики с объектом
import { ItemDetailsComponent }   from './item.details.component'; // дочерний компонент деталей с объектом
import { NewItemComponent }   from './new-item.component'; // новый компонент с объектом
import { NotFoundComponent } from './not-found.component'; // обработка неверного пути

//определение дочерних маршрутов
const itemRoutes: Routes = [
    { path: 'details', component: ItemDetailsComponent},
    { path: 'stat', component: ItemStatComponent},
];

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent}, // путь к компоненту домашней страници
    { path: 'about', component: AboutComponent}, // путь к компоненту про проект
    { path: 'logout', redirectTo: '/'}, // переадрисация на домашнюю страницу при выходе
    { path: 'contact', redirectTo: '/about', pathMatch:'full'}, // переадресация на страницу о проекте при точном совпадении адреса
    { path: 'item/:id', component: ItemComponent}, // путь к компоненту с объектом
    { path: 'item/:id', component: ItemComponent, children: itemRoutes},
    { path: 'new-item/:id', component: NewItemComponent}, // путь к новому компоненту с объектом
    { path: '**', component: NotFoundComponent } // уведомление если все вышеуказнные маршруты не подошли
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ], // подключение модулей для компонента
    declarations: [ AppComponent, HomeComponent, AboutComponent, ItemComponent, ItemStatComponent, ItemDetailsComponent, NewItemComponent, NotFoundComponent ], // декларируем собственные компоненты
    bootstrap:    [ AppComponent ] // добавляем для сборки, что бы компилятор собрал
})
// модуль, который будет подтягиваться при импорте в главный инициализации и запуска
export class AppModule { }
