import home from './pages/home/home.hbs'
import login from './pages/login/login.hbs'
import error404 from './pages/errors/error404.hbs'
import error500 from './pages/errors/error500.hbs'
import signin from './pages/signin/signin.hbs'
import profile from './pages/profile/profile.hbs'
import Handlebars from "handlebars/runtime";
import myPartial from "./partials/myPartial.hbs"

const ROUTES: Record<string, Function> = {
    '/': home,
    '/home': home,
    '/login': login,
    '/signin': signin,
    '/profile': profile,
    '/error404': error404,
    '/error500': error500,
}

Handlebars.registerPartial('myPartial', myPartial);

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    if (root) {
        console.log(root)
        console.log(window.location.pathname)

        if (ROUTES[window.location.pathname])
            root.innerHTML = ROUTES[window.location.pathname]()
        else root.innerHTML = error404();
    }
})