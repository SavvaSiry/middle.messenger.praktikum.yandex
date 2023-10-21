// import {Chat} from "./pages/chat";
import {Login} from "./pages/login";
import {Signin} from "./pages/signin";
// import {Profile} from "./pages/profile/main";
import {Error404} from "./pages/errors/error404";
import {Error500} from "./pages/errors/error500";
// import {ProfileEditInfo} from "./pages/profile/edit/info";
// import {ProfileEditPass} from "./pages/profile/edit/pass";
import {Example} from "./pages/example";
import Block from "./utils/Block";

const ROUTES: Record<string, Block> = {
    '/': new Login(),
    '/login': new Login(),
    '/signin': new Signin(),
    // '/profile': Profile(),
    // '/profile-edit-info': ProfileEditInfo(),
    // '/profile-edit-pass': ProfileEditPass(),
    '/error404': new Error404(),
    '/error500': new Error500(),
    // '/chat': Chat(),
    '/example': new Example(),
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    if (root) {
        let component: Block;

        if (ROUTES[window.location.pathname])
            component = ROUTES[window.location.pathname];
        else
            component = ROUTES["/error404"];

        root.append(component.element!);
        component.dispatchComponentDidMount();
    }
})
