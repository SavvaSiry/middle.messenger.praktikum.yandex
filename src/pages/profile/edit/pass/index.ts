import {tmpl} from "./profile.edit.pass.tmpl";
import Block from "../../../../utils/Block";
import {InputPassword} from "../../../../components/input/password";
import {Input} from "../../../../components/input";
import {Button} from "../../../../components/button";


export class ProfileEditPass extends Block {
    constructor() {
        super('div', {});
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
            events: {
                blur: () => {
                    if (this.children.inputPassword instanceof Input) {
                        if (this.children.inputPassword.value === this.children.inputPasswordAgain.value)
                            this.children.inputPasswordAgain.props.class = "profile-form__input"
                        else
                            this.children.inputPasswordAgain.props.class = "profile-form__input invalid"
                    }
                }
            }
        }),

        this.children.button = new Button({
            attributes: [
                {name: 'type', value: 'submit'},
            ],
            label: 'Сохранить',
            class: 'button',
            events: {
                click: () => {
                    let formData = {}
                    Object.entries(this.children).forEach((child) => {
                        if (child[1] instanceof Input) {
                            formData[child[1].name] = child[1].value
                        }
                    })
                    console.log(formData)
                }
            },
        });
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
