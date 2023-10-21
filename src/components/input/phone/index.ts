import {Input} from "../index";

export class InputPhone extends Input {

    get isValid(): boolean {
        return (/^\+?\d{10,15}$/.test(this.value));
    }
}