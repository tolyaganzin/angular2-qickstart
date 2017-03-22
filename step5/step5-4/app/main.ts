import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // модуль для запуска под разные платформы
import { AppModule } from './app.module'; // нашь модуль, который содержит компоненты
const platform = platformBrowserDynamic(); // инициализация
platform.bootstrapModule(AppModule); // запуск главного модуля
