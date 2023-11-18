import router from './core/Router';
import AuthController from './controllers/AuthController';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Profile } from './pages/profile/main';
import { Chat } from './pages/chat';
import { ProfileEditInfo } from './pages/profile/edit/info';
import { ProfileEditPass } from './pages/profile/edit/pass';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/settings',
  ProfileInfo = '/settings-info',
  ProfilePassword = '/settings-password',
  Chat = '/messenger'
}

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use(Routes.Index, SignIn)
    .use(Routes.Register, SignUp)
    .use(Routes.Profile, Profile)
    .use(Routes.ProfileInfo, ProfileEditInfo)
    .use(Routes.ProfilePassword, ProfileEditPass)
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
