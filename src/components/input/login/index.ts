import {Input} from "../index";

export class InputLogin extends Input {

    get isValid(): boolean {
        return (!/^[A-Za-z][A-Za-z0-9_-]{2,19}$/.test(this.value));
    }
}