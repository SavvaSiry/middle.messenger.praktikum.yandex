import Block from '../../../../utils/Block';
import { Input } from '../../../input';
import { Button } from '../../../button';
import { InputPhone } from '../../../input/phone';
import { InputEmail } from '../../../input/email';
import { InputLogin } from '../../../input/login';
import { InputName } from '../../../input/name';

export class ProfileInfoForm extends Block {

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
        }
      };
    }
    super('form', props);
  }

  protected init() {

    this.children.inputEmail = new InputEmail({
      attributes: [
        {
          name: 'placeholder',
          value: 'example@mail.ru'
        },
        {
          name: 'name',
          value: 'email'
        },
        {
          name: 'type',
          value: 'text'
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => {
          if (this.children.inputEmail instanceof Input) {
            let input: Input = this.children.inputEmail;
            this.props.errorEmail = input.validate();
          }
        }
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputLogin = new InputLogin({
      attributes: [
        {
          name: 'placeholder',
          value: 'example'
        },
        {
          name: 'name',
          value: 'login'
        },
        {
          name: 'type',
          value: 'text'
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => {
          if (this.children.inputLogin instanceof Input) {
            let input: Input = this.children.inputLogin;
            this.props.errorLogin = input.validate();
          }
        }
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputUsername = new InputName({
      attributes: [
        {
          name: 'placeholder',
          value: 'Иван'
        },
        {
          name: 'name',
          value: 'first_name'
        },
        {
          name: 'type',
          value: 'text'
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => {
          if (this.children.inputUsername instanceof Input) {
            let input: Input = this.children.inputUsername;
            this.props.errorUsername = input.validate();
          }
        }
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputSecondName = new InputName({
      attributes: [
        {
          name: 'placeholder',
          value: 'Иванов'
        },
        {
          name: 'name',
          value: 'second_name'
        },
        {
          name: 'type',
          value: 'text'
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => {
          if (this.children.inputSecondName instanceof Input) {
            let input: Input = this.children.inputSecondName;
            this.props.errorSecondName = input.validate();
          }
        }
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputDisplayName = new InputName({
      attributes: [
        {
          name: 'placeholder',
          value: 'Иван'
        },
        {
          name: 'name',
          value: 'display_name'
        },
        {
          name: 'type',
          value: 'text'
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => {
          if (this.children.inputDisplayName instanceof Input) {
            let input: Input = this.children.inputDisplayName;
            this.props.errorDisplayName = input.validate();
          }
        }
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputPhone = new InputPhone({
      attributes: [
        {
          name: 'placeholder',
          value: '123-321-123'
        },
        {
          name: 'name',
          value: 'phone'
        },
        {
          name: 'type',
          value: 'text'
        },
      ],
      class: 'profile-form__input',
      events: {
        blur: () => {
          if (this.children.inputPhone instanceof Input) {
            let input: Input = this.children.inputPhone;
            this.props.errorPhone = input.validate();
          }
        }
      },
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.button = new Button({
      attributes: [
        {
          name: 'type',
          value: 'submit'
        }
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
