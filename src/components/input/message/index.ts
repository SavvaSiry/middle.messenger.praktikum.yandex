import { Input } from '../index';

export class InputMessage extends Input {
  get isValid(): boolean {
    return this.value.trim() === '';
  }
}
