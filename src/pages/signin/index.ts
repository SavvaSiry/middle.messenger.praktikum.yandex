import {tmpl} from "./signin.tmpl";
import Block from "../../utils/Block";
import {InputLogin} from "../../components/input/login";
import {InputName} from "../../components/input/name";
import {InputEmail} from "../../components/input/email";
import {InputPhone} from "../../components/input/phone";
import {InputPassword} from "../../components/input/password";
import {Input} from "../../components/input";
import {Button} from "../../components/button";

export class Signin extends Block {

    constructor() {
        super('div', {});
    }

    protected init() {
        this.children.inputEmail = new InputEmail({
            attributes: [
                {name: 'placeholder', value: 'Введите почту'},
                {name: 'name', value: 'email'},
                {name: 'type', value: 'text'},
            ],
            class: "login-form__input",
        }, "login-form__input", "login-form__input invalid"),

        this.children.inputLogin = new InputLogin({
            attributes: [
                {name: 'placeholder', value: 'Введите логин'},
                {name: 'name', value: 'login'},
                {name: 'type', value: 'text'},
            ],
            class: "login-form__input",
        }, "login-form__input", "login-form__input invalid"),

        this.children.inputUsername = new InputName({
            attributes: [
                {name: 'placeholder', value: 'Введите имя'},
                {name: 'name', value: 'first_name'},
                {name: 'type', value: 'text'},
            ],
            class: "login-form__input",
        }, "login-form__input", "login-form__input invalid"),

            this.children.inputSecondName = new InputName({
                attributes: [
                    {name: 'placeholder', value: 'Введите фамилию'},
                    {name: 'name', value: 'second_name'},
                    {name: 'type', value: 'text'},
                ],
                class: "login-form__input",
            }, "login-form__input", "login-form__input invalid"),

            this.children.inputPhone = new InputPhone({
                attributes: [
                    {name: 'placeholder', value: 'Введите номер телефона'},
                    {name: 'name', value: 'phone'},
                    {name: 'type', value: 'text'},
                ],
                class: "login-form__input",
            }, "login-form__input", "login-form__input invalid"),

            this.children.inputPassword = new InputPassword({
                attributes: [
                    {name: 'placeholder', value: 'Введите пароль'},
                    {name: 'name', value: 'password'},
                    {name: 'type', value: 'password'},
                ],
                class: "login-form__input",
            }, "login-form__input", "login-form__input invalid"),

            this.children.inputPasswordAgain = new Input({
                attributes: [
                    {name: 'placeholder', value: 'Введите пароль'},
                    {name: 'name', value: 'password'},
                    {name: 'type', value: 'password'},
                ],
                class: "login-form__input",
                events: {
                    blur: ()=> {
                        if (this.children.inputPassword instanceof Input) {
                            if (this.children.inputPassword.value === this.children.inputPasswordAgain.value)
                                this.children.inputPasswordAgain.props.class = "login-form__input"
                            else
                                this.children.inputPasswordAgain.props.class = "login-form__input invalid"
                        }
                    }
                }
            }),

            this.children.button = new Button({
                attributes: [
                    {name: 'type', value: 'submit'},
                ],
                label: 'Зарегестрироваться',
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
