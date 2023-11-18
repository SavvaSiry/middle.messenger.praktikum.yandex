import { tmpl } from './signup.tmpl';
import Block from '../../core/Block/Block';
import { SignUpForm } from '../../components/form/signup';

export class SignUp extends Block {
  constructor() {
    super('div', {});
  }

  protected init() {
    this.children.signinForm = new SignUpForm({
      attributes: [],
      class: 'login-form',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
