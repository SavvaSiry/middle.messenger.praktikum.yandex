import { Input } from '../../../input';
import { InputPassword } from '../../../input/password';
import { Button } from '../../../button';
import { Form } from '../../index';

export class ProfilePasswordForm extends Form {
  protected init() {
    this.children.oldPassword = new InputPassword({
      attributes: [
        {
          name: 'placeholder',
          value: '*********',
        },
        {
          name: 'name',
          value: 'oldPassword',
        },
        {
          name: 'type',
          value: 'password',
        },
      ],
      events: {
        blur: () => {
          if (this.children.oldPassword instanceof Input) {
            const input: Input = this.children.oldPassword;
            this.props.errorOldPassword = input.validate();
          }
        },
      },
      class: 'profile-form__input',
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.newPassword = new InputPassword({
      attributes: [
        {
          name: 'placeholder',
          value: '*********',
        },
        {
          name: 'name',
          value: 'newPassword',
        },
        {
          name: 'type',
          value: 'password',
        },
      ],
      events: {
        blur: () => {
          if (this.children.newPassword instanceof Input) {
            const input: Input = this.children.newPassword;
            this.props.errorNewPassword = input.validate();
          }
        },
      },
      class: 'profile-form__input',
    }, 'profile-form__input', 'profile-form__input invalid');

    this.children.newPasswordAgain = new InputPassword({
      attributes: [
        {
          name: 'placeholder',
          value: '*********',
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
          if (this.children.newPasswordAgain instanceof Input) {
            const input: Input = this.children.newPasswordAgain;
            this.props.errorNewPasswordAgain = input.validate();
          }
        },
      },
      class: 'profile-form__input',
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
                    <label class="text_dark" for="email">Старый пароль</label>
                    <div>
                      {{{oldPassword}}}
                      <div class="profile-form__error">{{{errorOldPassword}}}</div>
                    </div>
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="login">Новый пароль</label>
                    <div>
                      {{{newPassword}}}
                      <div class="profile-form__error">{{{errorNewPassword}}}</div>
                    </div>
                </li>
                <li class="profile__content__list__item">
                    <label class="text_dark" for="first_name">Повторите новый пароль</label>
                    <div>
                      {{{newPasswordAgain}}}
                      <div class="profile-form__error">{{{errorNewPasswordAgain}}}</div>
                    </div>
                </li>
            </ul>
            {{{button}}}
`, this.props);
  }
}
