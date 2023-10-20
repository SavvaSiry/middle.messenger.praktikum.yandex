import {tmpl} from "./login.tmpl";
import Block from "../../utils/Block";
// import {Button} from "../../components/button";

export class Login extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        // this.children.button = new Button({
        //     label: 'Кликни меня',
        //     type: 'submit',
        //     events: {
        //         click: () => console.log(this.children)
        //     },
        // });
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
