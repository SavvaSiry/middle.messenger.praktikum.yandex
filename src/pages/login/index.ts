import {tmpl} from "./login.tmpl";
import Block from "../../utils/Block";
import {Input} from "../../components/input";
import {InputLogin} from "../../components/input/login";
import {InputPassword} from "../../components/input/password";
import {Button} from "../../components/button";

export class Login extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        this.children.button = new Button({
            attributes: [
                {name: 'type', value: 'submit'},
            ],
            label: 'Войти',
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
        this.children.inputLogin = new InputLogin({
            attributes: [
                {name: 'placeholder', value: 'Введите логин'},
                {name: 'name', value: 'username'},
            ],
            class: "login-form__input",
            events: {
                blur: () => {
                    if (this.children.inputLogin instanceof Input)
                        if (this.children.inputLogin.isValid) {
                            this.children.inputLogin.props.class = "login-form__input"
                        } else {
                            this.children.inputLogin.props.class = "login-form__input invalid"
                        }
                }
            },
        }),
        this.children.inputPassword = new InputPassword({
            attributes: [
                {name: 'placeholder', value: 'Введите пароль'},
                {name: 'name', value: 'password'},
                {name: 'type', value: 'password'},
            ],
            class: "login-form__input",
            events: {
                blur: () => {
                    if (this.children.inputPassword instanceof Input)
                        if (this.children.inputPassword.isValid) {
                            this.children.inputPassword.props.class = "login-form__input"
                        } else {
                            this.children.inputPassword.props.class = "login-form__input invalid"
                        }
                }
            },
        })
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
