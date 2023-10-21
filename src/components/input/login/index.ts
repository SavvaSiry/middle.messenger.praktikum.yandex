import {Input} from "../index";

export class InputLogin extends Input {

    get isValid(): boolean {
        return (/^(?=.*[A-Za-zА-Яа-я])[A-Za-zА-Яа-я0-9_-]{3,20}$/.test(this.value));
    }
}