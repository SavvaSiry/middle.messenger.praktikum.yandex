import { tmpl } from './signin.tmpl';
import Block from '../../core/Block/Block';
import { SignInForm } from '../../components/form/signin';

export class SignIn extends Block {
  constructor() {
    super('div', {});
  }

  protected init() {
    this.children.loginForm = new SignInForm({
      class: 'login-form',
      attributes: [],
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
