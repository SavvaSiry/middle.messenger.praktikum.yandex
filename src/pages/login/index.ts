import { tmpl } from './login.tmpl';
import Block from '../../utils/Block';
import { InputPassword } from '../../components/input/password';
import { SubmitButton } from '../../components/button/submit';
import { NewInput } from '../../components/newInput';
import { LoginForm } from '../../components/form/login';

export class Login extends Block {

  constructor() {
    super('div', {});
  }

  protected init() {
    // this.children.button = new SubmitButton({
    //   attributes: [
    //     {
    //       name: 'type',
    //       value: 'submit'
    //     },
    //   ],
    //   label: 'Войти',
    //   class: 'button',
    // }, this.children);

    this.children.loginForm = new LoginForm({
      attributes: [],
      class: 'login-form',
      label: 'Логин',
      inputClass: 'login-form__input',
    }, 'login-form__input', 'login-form__input invalid');

    // this.children.inputPassword = new InputPassword({
    //   attributes: [
    //     {
    //       name: 'placeholder',
    //       value: 'Введите пароль'
    //     },
    //     {
    //       name: 'name',
    //       value: 'password'
    //     },
    //     {
    //       name: 'type',
    //       value: 'password'
    //     },
    //   ],
    //   class: 'login-form__input',
    // }, 'login-form__input', 'login-form__input invalid');
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
