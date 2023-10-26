import { tmpl } from './signin.tmpl';
import Block from '../../utils/Block';
import { SigninForm } from '../../components/form/signin';

export class Signin extends Block {

  constructor() {
    super('div', {});
  }

  protected init() {
      this.children.signinForm = new SigninForm({
        attributes: [],
        class: 'login-form',
        label: 'Регистрация',
      });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
