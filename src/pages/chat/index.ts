import {tmpl} from "./chat.tmpl";
import Block from "../../utils/Block";
import {InputMessage} from "../../components/input/message";

export class Chat extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        this.children.inputMessage = new InputMessage({
            attributes: [
                {name: 'placeholder', value: 'Сообщение'},
                {name: 'name', value: 'message'},
                {name: 'type', value: 'text'},
            ],
            class: "input",
        })
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
