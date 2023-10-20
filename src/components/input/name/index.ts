import {Input} from "../index";

export class InputName extends Input {

    get isValid(): boolean {
        return (!/^[A-ZА-Я][A-Za-zА-Яа-я\-]+$/.test(this.value));
    }
}