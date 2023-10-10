import {Chat} from "./pages/chat";
import {Login} from "./pages/login";
import {Signin} from "./pages/signin";
import {Profile} from "./pages/profile";
import {Error404} from "./pages/errors/error404";
import {Error500} from "./pages/errors/error500";

const ROUTES: Record<string, string> = {
    '/': Login(),
    '/login': Login(),
    '/signin': Signin(),
    '/profile': Profile(),
    '/error404': Error404(),
    '/error500': Error500(),
    '/chat': Chat(),
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    if (root) {
        if (ROUTES[window.location.pathname])
            root.innerHTML = ROUTES[window.location.pathname]
        else root.innerHTML = Error404();
    }
})
