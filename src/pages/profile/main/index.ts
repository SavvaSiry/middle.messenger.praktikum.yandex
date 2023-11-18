import { tmpl } from './profile.main.tmpl';
import Block from '../../../core/Block/Block';
import { Link } from '../../../components/link';
import router from '../../../core/Router';
import AuthController from '../../../controllers/AuthController';
import { ISignInData } from '../../../api/AuthAPI';

export class Profile extends Block {
  constructor() {
    super('div', {});
  }

  protected init() {
    this.children.editInfo = new Link({
      attributes: [
        {
          name: 'class',
          value: 'text_info',
        },
      ],
      text: "Изменить данные",
      events: {
        click: () => {
          router.go('/settings-info')
        },
      },
    })

    this.children.editPassword = new Link({
      attributes: [
        {
          name: 'class',
          value: 'text_info',
        },
      ],
      text: "Изменить пароль",
      events: {
        click: () => {
          router.go('/settings-password')
        },
      },
    })

    this.children.logout = new Link({
      attributes: [
        {
          name: 'class',
          value: 'text_danger',
        },
      ],
      text: "Выйти",
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    })
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
