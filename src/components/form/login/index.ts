import { InputLogin } from '../../input/login';
import { Input } from '../../input';
import { InputPassword } from '../../input/password';
import { Button } from '../../button';
import { Form } from '../index';

export class LoginForm extends Form {
  protected init() {
    this.children.inputLogin = new InputLogin({
      attributes: [{
        name: 'name',
        value: 'login',
      }],
      class: 'login-form__input',
      events: {
        blur: () => {
          if (this.children.inputLogin instanceof Input) {
            const input: Input = this.children.inputLogin;
            this.props.errorMessage = input.validate();
          }
        },
      },
    }, 'login-form__input', 'login-form__input invalid');

    this.children.inputPassword = new InputPassword({
      attributes: [{
        name: 'type',
        value: 'password',
      },
      {
        name: 'name',
        value: 'password',
      }],
      class: 'login-form__input',
      events: {
        blur: () => {

        },
      },
    }, 'login-form__input', 'login-form__input invalid');

    this.children.button = new Button({
      attributes: [
        {
          name: 'type',
          value: 'submit',
        },
      ],
      label: 'Войти',
      class: 'button',
    });
  }

  render(): DocumentFragment {
    return this.compile(`
    <div class="card__container">
        <h1 class="card__title">Вход</h1>
        <div class="login-form__field">
          <label class="login-form__label text_light" for="username">{{label}}</label>
            {{{inputLogin}}}
          <span class="login-form__error">{{errorMessage}}</span>
        </div>    
        <div class="login-form__field">
            <label class="login-form__label text_light" for="password">Пароль</label>
            {{{inputPassword}}}
        </div>
    </div>
    <div class="card__container">
        {{{button}}}
        <a class="card__link" href="/signin">Нет аккаунта?</a>
    </div>
    `, this.props);
  }
}
