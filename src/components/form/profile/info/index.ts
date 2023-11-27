import { Input } from '../../../input';
import { Button } from '../../../button';
import { InputPhone } from '../../../input/phone';
import { InputEmail } from '../../../input/email';
import { InputLogin } from '../../../input/login';
import { InputName } from '../../../input/name';
import { Form } from '../../index';
import { IUser } from '../../../../api/AuthAPI';
import SettingsController from '../../../../controllers/SettingsController';
import { IUserSettings } from '../../../../api/SettingsAPI';


interface FormData {
  [key: string]: string;
}

interface ProfileInfoProps {
  class: string,
  attributes: {
    name: string;
    value: string;
  }[],
  user: IUser,
  events?: {
    submit: (event: Event) => void;
  };
}

export class ProfileInfoForm extends Form {
  constructor(props: ProfileInfoProps) {
    if (!props.events) {
      props.events = {
        submit: (event: Event) => this.onSubmit(event),
      };
    }
    super(props);
  }

  private onSubmit(event: Event) {
    event.preventDefault();

    this.validateEmail();
    this.validateLogin();
    this.validateName();
    this.validateUsername();
    this.validateDisplayName();
    this.validatePhone();

    const data: FormData = {};

    Object.entries(this.children)
      .forEach((child) => {
        if (child[1] instanceof Input) {
          data[child[1].name] = child[1].value;
        }
      });

    console.log("SUBMIT!");

    SettingsController.editInfo(data as IUserSettings);
  }

  validateEmail() {
    if (this.children.inputEmail instanceof Input) {
      const input: Input = this.children.inputEmail;
      this.props.errorEmail = input.validate();
    }
  }

  validateLogin() {
    if (this.children.inputLogin instanceof Input) {
      const input: Input = this.children.inputLogin;
      this.props.errorLogin = input.validate();
    }
  }

  private validateUsername() {
    if (this.children.inputUsername instanceof Input) {
      const input: Input = this.children.inputUsername;
      this.props.errorUsername = input.validate();
    }
  }

  private validateName() {
    if (this.children.inputSecondName instanceof Input) {
      const input: Input = this.children.inputSecondName;
      this.props.errorSecondName = input.validate();
    }
  }

  private validateDisplayName() {
    if (this.children.inputDisplayName instanceof Input) {
      const input: Input = this.children.inputDisplayName;
      this.props.errorDisplayName = input.validate();
    }
  }

  private validatePhone() {
    if (this.children.inputPhone instanceof Input) {
      const input: Input = this.children.inputPhone;
      this.props.errorPhone = input.validate();
    }
  }

  private getUserInfo(propName: string): string {
    if (this.props.user[propName] !== undefined && this.props.user[propName] !== null)
      return this.props.user[propName];


    return '';
  }

  protected init() {
    this.children.inputEmail = new InputEmail({
      attributes: [
        {
          name: 'placeholder',
          value: 'example@mail.ru',
        },
        {
          name: 'name',
          value: 'email',
        },
        {
          name: 'type',
          value: 'text',
        },
        {
          name: 'value',
          value: this.getUserInfo('email'),
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => this.validateEmail(),
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputLogin = new InputLogin({
      attributes: [
        {
          name: 'placeholder',
          value: 'example',
        },
        {
          name: 'name',
          value: 'login',
        },
        {
          name: 'type',
          value: 'text',
        },
        {
          name: 'value',
          value: this.getUserInfo('login'),
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => this.validateLogin(),
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputUsername = new InputName(
      {
        attributes: [
          {
            name: 'placeholder',
            value: 'Иван',
          },
          {
            name: 'name',
            value: 'first_name',
          },
          {
            name: 'type',
            value: 'text',
          },
          {
            name: 'value',
            value: this.getUserInfo('first_name'),
          },
        ],
        class: 'profile-form__input',
        events: {
          blur: () => this.validateUsername(),
        },
      },
      'profile-form__input',
      'profile-form__input invalid',
    );

    this.children.inputSecondName = new InputName({
      attributes: [
        {
          name: 'placeholder',
          value: 'Иванов',
        },
        {
          name: 'name',
          value: 'second_name',
        },
        {
          name: 'type',
          value: 'text',
        },
        {
          name: 'value',
          value: this.getUserInfo('second_name'),
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => this.validateName(),
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputDisplayName = new InputName({
      attributes: [
        {
          name: 'placeholder',
          value: 'Иван',
        },
        {
          name: 'name',
          value: 'display_name',
        },
        {
          name: 'type',
          value: 'text',
        },
        {
          name: 'value',
          value: this.getUserInfo('display_name'),
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => this.validateDisplayName(),
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputPhone = new InputPhone({
      attributes: [
        {
          name: 'placeholder',
          value: '123-321-123',
        },
        {
          name: 'name',
          value: 'phone',
        },
        {
          name: 'type',
          value: 'text',
        },
        {
          name: 'value',
          value: this.getUserInfo('phone'),
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => {
          this.validatePhone();
        },
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.button = new Button({
      attributes: [
        {
          name: 'type',
          value: 'submit',
        },
      ],
      label: 'Сохранить',
      class: 'button',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(`
            <ul class="profile__content__list">
                <li class="profile__content__list__item">
                    <label class="text_dark" for="email">Почта</label>
                    <div>
                      {{{inputEmail}}}
                      <div class="profile-form__error">{{{errorEmail}}}</div>
                    </div>
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="login">Логин</label>
                    <div>
                      {{{inputLogin}}}
                      <div class="profile-form__error">{{{errorLogin}}}</div>
                    </div>
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="first_name">Имя</label>
                    <div>
                      {{{inputUsername}}}
                      <div class="profile-form__error">{{{errorUsername}}}</div>
                    </div>
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="second_name">Фамилия</label>
                    <div>
                      {{{inputSecondName}}}
                      <div class="profile-form__error">{{{errorSecondName}}}</div>
                    </div>
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="display_name">Имя в чате</label>
                    <div>
                      {{{inputDisplayName}}}
                      <div class="profile-form__error">{{{errorDisplayName}}}</div>
                    </div>
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="phone">Телефон</label>
                    <div>
                      {{{inputPhone}}}
                      <div class="profile-form__error">{{{errorPhone}}}</div>
                    </div>
                </li>
            </ul>
            {{{button}}}
`, this.props);
  }
}
