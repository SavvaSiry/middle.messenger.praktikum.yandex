import { tmpl } from './profile.edit.pass.tmpl';
import Block from '../../../../utils/Block';
import { InputPassword } from '../../../../components/input/password';
import { Input } from '../../../../components/input';
import { SubmitButton } from '../../../../components/button/submit';

export class ProfileEditPass extends Block {
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
                }
            }
        });
    }

    protected init() {
        this.children.oldPassword = new InputPassword({
            attributes: [
                {name: 'placeholder', value: '*********'},
                {name: 'name', value: 'oldPassword'},
                {name: 'type', value: 'password'},
            ],
            class: "profile-form__input",
        }, "profile-form__input", "profile-form__input invalid"),

        this.children.newPassword = new InputPassword({
            attributes: [
                {name: 'placeholder', value: '*********'},
                {name: 'name', value: 'newPassword'},
                {name: 'type', value: 'password'},
            ],
            class: "profile-form__input",
        }, "profile-form__input", "profile-form__input invalid"),

        this.children.newPasswordAgain = new Input({
            attributes: [
                {name: 'placeholder', value: '*********'},
                {name: 'name', value: 'newPassword'},
                {name: 'type', value: 'password'},
            ],
            class: "profile-form__input",
            // events: {
            //     blur: () => {
            //         if (this.children.inputPassword instanceof Input) {
            //             if (this.children.newPassword.value === this.children.newPasswordAgain.value)
            //                 this.children.newPassword.props.class = "profile-form__input"
            //             else
            //                 this.children.newPassword.props.class = "profile-form__input invalid"
            //         }
            //     }
            // }
        }, 'profile-form__input', 'profile-form__input invalid'),

        this.children.button = new SubmitButton({
            attributes: [
                {name: 'type', value: 'submit'},
            ],
            label: 'Сохранить',
            class: 'button',
        }, this.children);
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
