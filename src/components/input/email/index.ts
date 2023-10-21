import {Input} from "../index";

export class InputEmail extends Input {

    get isValid(): boolean {
        return (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(this.value));
    }
}