import Block from '../../../utils/Block';
import { InputLogin } from '../../input/login';
import { Input } from '../../input';
import { InputPassword } from '../../input/password';
import { Button } from '../../button';
import { InputPhone } from '../../input/phone';
import { InputEmail } from '../../input/email';
import { InputName } from '../../input/name';

interface LoginFormProps {
  attributes: {
    name: string,
    value: string
  }[],
  class: string,
  label: string,
  events?: {
    submit: () => void,
  }
}

interface formData {
  [key: string]: string;
}

export class SigninForm extends Block {
  constructor(props: LoginFormProps) {
    if (!props.events) {
      props.events = {
        submit: () => {
          const data: formData = {};

          Object.entries(this.children)
            .forEach((child) => {
              if (child[1] instanceof Input) {
                data[child[1].name] = child[1].value;
              }
            });

          console.log(data);
        },
      };
    }

    super('form', props);
  }

  protected init() {
    this.children.inputEmail = new InputEmail({
      attributes: [
        {
          name: 'placeholder',
          value: 'Введите почту',
        },
        {
          name: 'name',
          value: 'email',
        },
        {
          name: 'type',
          value: 'text',
        },
      ],
      events: {
        blur: () => {
          if (this.children.inputEmail instanceof Input) {
            const input: Input = this.children.inputEmail;
            this.props.errorMessageEmail = input.validate();
          }
        },
      },
      class: 'login-form__input',
    }, 'login-form__input', 'login-form__input invalid');

    this.children.inputLogin = new InputLogin({
      attributes: [
        {
          name: 'placeholder',
          value: 'Введите логин',
        },
        {
          name: 'name',
          value: 'login',
        },
        {
          name: 'type',
          value: 'text',
        },
      ],
      events: {
        blur: () => {
          if (this.children.inputLogin instanceof Input) {
            const input: Input = this.children.inputLogin;
            this.props.errorMessageLogin = input.validate();
          }
        },
      },
      class: 'login-form__input',
    }, 'login-form__input', 'login-form__input invalid');

    this.children.inputUsername = new InputName({
      attributes: [
        {
          name: 'placeholder',
          value: 'Введите имя',
        },
        {
          name: 'name',
          value: 'first_name',
        },
        {
          name: 'type',
          value: 'text',
        },
      ],
      events: {
        blur: () => {
          if (this.children.inputUsername instanceof Input) {
            const input: Input = this.children.inputUsername;
            this.props.errorMessageUsername = input.validate();
          }
        },
      },
      class: 'login-form__input',
    }, 'login-form__input', 'login-form__input invalid');

    this.children.inputSecondName = new InputName({
      attributes: [
        {
          name: 'placeholder',
          value: 'Введите фамилию',
        },
        {
          name: 'name',
          value: 'second_name',
        },
        {
          name: 'type',
          value: 'text',
        },
      ],
      events: {
        blur: () => {
          if (this.children.inputSecondName instanceof Input) {
            const input: Input = this.children.inputSecondName;
            this.props.errorMessageSecondName = input.validate();
          }
        },
      },
      class: 'login-form__input',
    }, 'login-form__input', 'login-form__input invalid');

    this.children.inputPhone = new InputPhone({
      attributes: [
        {
          name: 'placeholder',
          value: 'Введите номер телефона',
        },
        {
          name: 'name',
          value: 'phone',
        },
        {
          name: 'type',
          value: 'text',
        },
      ],
      events: {
        blur: () => {
          if (this.children.inputPhone instanceof Input) {
            const input: Input = this.children.inputPhone;
            this.props.errorMessagePhone = input.validate();
          }
        },
      },
      class: 'login-form__input',
    }, 'login-form__input', 'login-form__input invalid');

    this.children.inputPassword = new InputPassword({
      attributes: [
        {
          name: 'placeholder',
          value: 'Введите пароль',
        },
        {
          name: 'name',
          value: 'password',
        },
        {
          name: 'type',
          value: 'password',
        },
      ],
      events: {
        blur: () => {
          if (this.children.inputPassword instanceof Input) {
            const input: Input = this.children.inputPassword;
            this.props.errorMessagePassword = input.validate();
          }
        },
      },
      class: 'login-form__input',
    }, 'login-form__input', 'login-form__input invalid');

    this.children.inputPasswordAgain = new InputPassword({
      attributes: [
        {
          name: 'placeholder',
          value: 'Введите пароль',
        },
        {
          name: 'name',
          value: 'password',
        },
        {
          name: 'type',
          value: 'password',
        },
      ],
      events: {
        blur: () => {
          if (this.children.inputPasswordAgain instanceof Input) {
            const input: Input = this.children.inputPasswordAgain;
            this.props.errorMessagePasswordAgain = input.validate();
          }
        },
      },
      class: 'login-form__input',
    }, 'login-form__input', 'login-form__input invalid');

    this.children.button = new Button({
      attributes: [
        {
          name: 'type',
          value: 'submit',
        },
      ],
      label: 'Зарегестрироваться',
      class: 'button',
    });
  }

  render(): DocumentFragment {
    return this.compile(`
        <div class="card__container">
          <h1 class="card__title">Регистрация</h1>
          <div class="login-form__field">
              <div class="login-form__label text_light" for="email">Почта</div>
              {{{inputEmail}}}
              <span class="login-form__error">{{errorMessageEmail}}</span>
          </div>
          <div class="login-form__field">
              <div class="login-form__label text_light" for="login">Логин</div>
              {{{inputLogin}}}
              <span class="login-form__error">{{errorMessageLogin}}</span>
          </div>
          <div class="login-form__field">
              <div class="login-form__label text_light" for="first_name">Имя</div>
              {{{inputUsername}}}
              <span class="login-form__error">{{errorMessageUsername}}</span>
          </div>
          <div class="login-form__field">
              <div class="login-form__label text_light" for="second_name">Фамилия</div>
              {{{inputSecondName}}}
              <span class="login-form__error">{{errorMessageSecondName}}</span>
          </div>
          <div class="login-form__field">
              <div class="login-form__label text_light" for="phone">Телефон</div>
              {{{inputPhone}}}
              <span class="login-form__error">{{errorMessagePhone}}</span>
          </div>
          <div class="login-form__field">
              <div class="login-form__label text_light" for="password">Пароль</div>
              {{{inputPassword}}}
              <span class="login-form__error">{{errorMessagePassword}}</span>
          </div>
          <div class="login-form__field">
              <div class="login-form__label text_light" for="password">Пароль (еще раз)</div>
              {{{inputPasswordAgain}}}
              <span class="login-form__error">{{errorMessagePasswordAgain}}</span>
          </div>
        </div>
        <div class="card__container">
            {{{button}}}
            <a class="card__link" href="/login">Войти</a>
        </div>
    `, this.props);
  }
}
