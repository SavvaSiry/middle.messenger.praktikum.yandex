import { Input } from '../index';

export class InputPhone extends Input {
  get isValid(): boolean {
    return (/^\+?\d{10,15}$/.test(this.value));
  }

  validate(): string {
    if (this.isValid) {
      this.props.class = this.classValid;
      return '';
    }
    this.props.class = this.classInvalid;
    return 'Телефон состоит из цифр и возможен "+"';
  }
}
