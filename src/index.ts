import router from './core/Router';
import AuthController from './controllers/AuthController';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Profile } from './pages/profile/main';
import { Chat } from './pages/chat';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/settings',
  Chat = '/messenger'
}

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use(Routes.Index, SignIn)
    .use(Routes.Register, SignUp)
    .use(Routes.Profile, Profile)
    .use(Routes.Chat, Chat);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {

    await AuthController.fetchUser();

    router.start();

    if (!isProtectedRoute) {
      router.go(Routes.Chat);
    }
  } catch (e) {
    console.log(e, 'Here');
    router.start();

    if (isProtectedRoute) {
      router.go(Routes.Index);
    }
  }
});
