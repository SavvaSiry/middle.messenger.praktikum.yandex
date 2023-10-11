import {Chat} from "./pages/chat";
import {Login} from "./pages/login";
import {Signin} from "./pages/signin";
import {Profile} from "./pages/profile/main";
import {Error404} from "./pages/errors/error404";
import {Error500} from "./pages/errors/error500";
import {ProfileEditInfo} from "./pages/profile/edit/info";
import {ProfileEditPass} from "./pages/profile/edit/pass";

const ROUTES: Record<string, string> = {
    '/': Login(),
    '/login': Login(),
    '/signin': Signin(),
    '/profile': Profile(),
    '/profile-edit-info': ProfileEditInfo(),
    '/profile-edit-pass': ProfileEditPass(),
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
