import { tmpl } from './login.tmpl';
import Block from '../../utils/Block';
import { LoginForm } from '../../components/form/login';

export class Login extends Block {
  constructor() {
    super('div', {});
  }

  protected init() {
    this.children.loginForm = new LoginForm({
      class: 'login-form',
      attributes: [],
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
