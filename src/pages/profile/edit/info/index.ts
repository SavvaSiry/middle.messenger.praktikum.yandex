import {tmpl} from "./profile.edit.info.tmpl";
import Block from "../../../../utils/Block";


export class ProfileEditInfo extends Block {
    constructor() {
        super('div', {});
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
