import {tmpl} from "./profile.edit.pass.tmpl";
import Block from "../../../../utils/Block";


export class ProfileEditPass extends Block {
    constructor() {
        super('div', {});
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
