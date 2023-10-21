import { Input } from '../index';

export class InputPassword extends Input {
  get isValid(): boolean {
    return (/^(?=.*[A-Z])(?=.*\d)[\w\D]{8,40}$/.test(this.value));
  }
}
