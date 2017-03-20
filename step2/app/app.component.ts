import { Component } from '@angular/core';

// Вспомогательный клас для добавления данных в таблицу
export class Item{
    // Объевление переменных
    purchase: string; //покупка - строка
    done: boolean; // выполнено или нет - логика
    price: number; // цена - цифры

    // Конструктор для инициализации и присваивание данных
    constructor(purchase: string, price: number) { // Входные параметры с их типами

        // Инициализация параметров класа Item
        this.purchase = purchase ;
        this.price = price;
        this.done = false;
    }
}


// selector - название нового компонента (html тега)
// template - содержимое нашего нового компонента
@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    // Объевление объекта с типом нашего вспомогательного класа написанного выше
    items: Item[] =
    [
        // Инициализация по умолчанию объекта
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ];
    // Метод добавления
    addItem(text: string, price: number): void {
        // Валидация
        if(text==null || text==undefined || text.trim()=="")
            return;
        if(price==null || price==undefined)
            return;
        // Добавление
        this.items.push(new Item(text, price));
    }
}
