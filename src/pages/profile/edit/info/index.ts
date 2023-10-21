import { tmpl } from './profile.edit.info.tmpl';
import Block from '../../../../utils/Block';
import { InputEmail } from '../../../../components/input/email';
import { InputLogin } from '../../../../components/input/login';
import { InputPhone } from '../../../../components/input/phone';
import { InputName } from '../../../../components/input/name';
import { SubmitButton } from '../../../../components/button/submit';
import { Input } from '../../../../components/input';

export class ProfileEditInfo extends Block {
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
    this.children.inputEmail = new InputEmail({
      attributes: [
        { name: 'placeholder', value: 'example@mail.ru' },
        { name: 'name', value: 'email' },
        { name: 'type', value: 'text' },
      ],
      class: 'profile-form__input',
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputLogin = new InputLogin({
      attributes: [
        { name: 'placeholder', value: 'example' },
        { name: 'name', value: 'login' },
        { name: 'type', value: 'text' },
      ],
      class: 'profile-form__input',
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputUsername = new InputName({
      attributes: [
        { name: 'placeholder', value: 'Иван' },
        { name: 'name', value: 'first_name' },
        { name: 'type', value: 'text' },
      ],
      class: 'profile-form__input',
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputSecondName = new InputName({
      attributes: [
        { name: 'placeholder', value: 'Иванов' },
        { name: 'name', value: 'second_name' },
        { name: 'type', value: 'text' },
      ],
      class: 'profile-form__input',
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.displayName = new InputName({
      attributes: [
        { name: 'placeholder', value: 'Иван' },
        { name: 'name', value: 'display_name' },
        { name: 'type', value: 'text' },
      ],
      class: 'profile-form__input',
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.inputPhone = new InputPhone({
      attributes: [
        { name: 'placeholder', value: '123-321-123' },
        { name: 'name', value: 'phone' },
        { name: 'type', value: 'text' },
      ],
      class: 'profile-form__input',
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.button = new SubmitButton({
      attributes: [
        { name: 'type', value: 'submit' },
      ],
      label: 'Сохранить',
      class: 'button',
    }, this.children);
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
