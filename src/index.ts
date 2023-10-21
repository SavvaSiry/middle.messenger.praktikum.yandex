import { Chat } from './pages/chat';
import { Login } from './pages/login';
import { Signin } from './pages/signin';
import { Profile } from './pages/profile/main';
import { Error404 } from './pages/errors/error404';
import { Error500 } from './pages/errors/error500';
import { ProfileEditInfo } from './pages/profile/edit/info';
import { ProfileEditPass } from './pages/profile/edit/pass';
import Block from './utils/Block';

const ROUTES: Record<string, Block> = {
  '/': new Chat(),
  '/login': new Login(),
  '/signin': new Signin(),
  '/profile': new Profile(),
  '/profile-edit-info': new ProfileEditInfo(),
  '/profile-edit-pass': new ProfileEditPass(),
  '/error404': new Error404(),
  '/error500': new Error500(),
  '/chat': new Chat(),
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');

  if (root) {
    let component: Block;

    if (ROUTES[window.location.pathname]) {
      component = ROUTES[window.location.pathname];
    } else {
      component = ROUTES['/error404'];
    }

    root.append(component.element!);
    component.dispatchComponentDidMount();
  }
})
