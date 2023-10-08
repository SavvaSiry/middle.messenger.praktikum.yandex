import Handlebars from "handlebars/runtime";

import myPartial from "./partials/myPartial.hbs";

import chat from './pages/chat/chat.hbs';
import login from './pages/login/login.hbs'
import error404 from './pages/errors/error404.hbs'
import error500 from './pages/errors/error500.hbs'
import signin from './pages/signin/signin.hbs'
import profile from './pages/profile/profile.hbs'


//Роутинг сделал функциями для передачи состояний в компоненты (на будущее)
const ROUTES: Record<string, Function> = {
    '/': login,
    '/login': login,
    '/signin': signin,
    '/profile': profile,
    '/error404': error404,
    '/error500': error500,
    '/chat': chat,
}

//Прмиер кода регистрации partials
Handlebars.registerPartial('myPartial', myPartial);

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    if (root) {
        if (ROUTES[window.location.pathname])
            root.innerHTML = ROUTES[window.location.pathname]()
        else root.innerHTML = error404();
    }
})
