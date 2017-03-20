# Step 0
```
cd step0
npm install
npm start
```

## config

Для конфигурации, а так же инициализации нашего проекта требуються 2 файла
```
package.json
tsconfig.json
```
## tsconfig.json - конфигурирует TypeScript для angular2
### package.json

**start** - запускает компилятор, а так же сервер
```
"scripts": {
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "start": "concurrent \"npm run tsc:w\" \"npm run lite\" "
},
```

## app

Содержит
```
app.component.ts
boot.ts
```

**app.component.ts** - содержит главный компонент. **boot.ts** подключает нашь компонент для компиляции в сборке
