import {tmpl} from "./chat.tmpl";
import Block from "../../utils/Block";

export class Chat extends Block {
    constructor() {
        super('div', {});
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
