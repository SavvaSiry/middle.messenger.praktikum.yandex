import { tmpl } from './login.tmpl';
import Block from '../../utils/Block';
import { InputLogin } from '../../components/input/login';
import { InputPassword } from '../../components/input/password';
import { SubmitButton } from '../../components/button/submit';
import { Input } from '../../components/input';
import { NewInput } from '../../components/newInput';

export class Login extends Block {
  constructor() {
    super('div', {
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          Object.entries(this.children)
            .forEach((child) => {
              if (child[1] instanceof Input) {
                child[1].validate();
              }
            });
        },
      },
    });
  }

  protected init() {
    this.children.button = new SubmitButton({
      attributes: [
        {
          name: 'type',
          value: 'submit'
        },
      ],
      label: 'Войти',
      class: 'button',
    }, this.children);

    this.children.inputLogin = new NewInput({
      attributes: [],
      class: 'login-form__field',
      label: 'Логин',
      inputClass: 'login-form__input',
    }, 'login-form__input', 'login-form__input invalid');

    this.children.inputPassword = new InputPassword({
      attributes: [
        {
          name: 'placeholder',
          value: 'Введите пароль'
        },
        {
          name: 'name',
          value: 'password'
        },
        {
          name: 'type',
          value: 'password'
        },
      ],
      class: 'login-form__input',
    }, 'login-form__input', 'login-form__input invalid');
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
