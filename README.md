## Чат приложение
Этот проект представляет собой учебный фронтенд для чата, который находится в стадии разработки. 
Он разрабатывается с использованием сборщик Vite и шаблонизатор Handlebars. Так же в проекте 
используется архитектурный подход MVC, который реализован с помощью супер-класса Block и компонента EventBus,
который является реализацие паттерна посредник (Mediator).

### Используемые технологии
Проект использует следующие технологии:
- TS - type script
- Vite - быстрый сборщик для разработки фронтенда.
- Handlebars - шаблонизатор для удобного создания HTML-шаблонов.
- Less - препроцессор CSS
- Eslint - линтер для ts и js
- Style Lint - линтер для стилей

---
### Запуск и разработка
Прежде чем приступать к установке проекта, убедитесь, что у вас установлен **git bash и node.js версии не меньше >=12**
- [Как установить пакетный менеджер npm (node.js)](https://nodejs.org/ru/download/package-manager)
- [Как установить Git](https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git)

Склонируйте репозиторий у установите зависимости
```bash
git clone
npm install
```
Запуск проекта в режиме dev
```bash
npm run dev
```
Запуск express сервера
```bash
npm run start
```
Запуск линтеров
```bash
npm run lint
```

### Макет приложения
Проект в [Figma](https://www.figma.com/file/NvuI2IpdFw0rjGiZroI8Pt/Chat_external_link-(Savva)?type=design&node-id=0%3A1&mode=design&t=3LNtaRPCE6bBLfd2-1)

### Ознакомиться с проектом на [netlify](https://653a6995f3066e000884ade6--animated-melomakarona-48f294.netlify.app/)
- Страница [авторизации](https://653a6995f3066e000884ade6--animated-melomakarona-48f294.netlify.app/login)
- Страница [регестрации](https://653a6995f3066e000884ade6--animated-melomakarona-48f294.netlify.app/signin)
- Страница [профиля](https://653a6995f3066e000884ade6--animated-melomakarona-48f294.netlify.app/profile)
- Страница [изменения информации профиля](https://653a6995f3066e000884ade6--animated-melomakarona-48f294.netlify.app/profile-edit-pass)
- Страница [изменения пароля](https://653a6995f3066e000884ade6--animated-melomakarona-48f294.netlify.app/profile-edit-info)
- Странциа [чата](https://653a6995f3066e000884ade6--animated-melomakarona-48f294.netlify.app/chat)
- Страница [ошибки 404](https://653a6995f3066e000884ade6--animated-melomakarona-48f294.netlify.app/error404)
- Страница [ошибки 500](https://653a6995f3066e000884ade6--animated-melomakarona-48f294.netlify.app/error500)