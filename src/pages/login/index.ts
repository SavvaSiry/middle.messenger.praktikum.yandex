import { tmpl } from './login.tmpl';
import Block from '../../utils/Block';
import { LoginForm } from '../../components/form/login';

export class Login extends Block {

  constructor() {
    super('div', {});
  }

  protected init() {
    this.children.loginForm = new LoginForm({
      attributes: [],
      class: 'login-form',
      label: 'Логин',
      inputClass: 'login-form__input',
    });

  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
