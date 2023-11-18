import { InputLogin } from '../../input/login';
import { Input } from '../../input';
import { InputPassword } from '../../input/password';
import { Button } from '../../button';
import { Form, FormProps } from '../index';
import AuthController from '../../../controllers/AuthController';
import { ISignInData } from '../../../api/AuthAPI';
import { Link } from '../../link';
import router from '../../../core/Router';

interface FormData {
  [key: string]: string;
}

export class SignInForm extends Form {
  constructor(props: FormProps) {
    if (!props.events) {
      props.events = {
        submit: (event: Event) => this.onSubmit(event),
      };
    }
    super(props);
  }

  onSubmit(event: Event) {
    event.preventDefault();

    this.validateLogin();
    this.validatePassword();

    const values = Object
      .values(this.children)
      .filter(child => child instanceof Input)
      .map((child) => ([(child as Input).name, (child as Input).value]));

    const data = Object.fromEntries(values);

    console.log(data);

    AuthController.signin(data as ISignInData);
  }

  validateLogin() {
    if (this.children.inputLogin instanceof Input) {
      const input: Input = this.children.inputLogin;
      this.props.errorMessageLogin = input.validate();
    }
  }

  validatePassword() {
    if (this.children.inputPassword instanceof Input) {
      const input: Input = this.children.inputPassword;
      this.props.errorMessagePassword = input.validate();
    }
  }

  protected init() {
    this.children.inputLogin = new InputLogin({
      attributes: [{
        name: 'name',
        value: 'login',
      }],
      class: 'login-form__input',
      events: {
        blur: () => this.validateLogin(),
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
          this.validatePassword();
        },
      },
    }, 'login-form__input', 'login-form__input invalid');

    this.children.link = new Link({
      attributes: [
        {
          name: 'class',
          value: 'card__link',
        },
      ],
      text: "Нет аккаунта?",
      events: {
        click: () => {
          router.go("/sign-up")
        },
      },
    })

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
          <label class="login-form__label text_light" for="username">Логин</label>
            {{{inputLogin}}}
          <span class="login-form__error">{{{errorMessageLogin}}}</span>
        </div>
            
        <div class="login-form__field">
            <label class="login-form__label text_light" for="password">Пароль</label>
            {{{inputPassword}}}
            <span class="login-form__error">{{errorMessagePassword}}</span>
        </div>
        
    </div>
    <div class="card__container">
        {{{button}}}
        {{{link}}}
    </div>
    `, this.props);
  }
}
