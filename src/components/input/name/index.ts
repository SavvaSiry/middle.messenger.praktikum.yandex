import { Input } from '../index';

export class InputName extends Input {
  get isValid(): boolean {
    return (/^[A-ZА-Я][A-Za-zА-Яа-я]+$/.test(this.value));
  }

  validate(): string {
    if (this.isValid) {
      this.props.class = this.classValid;
      return '';
    }
    this.props.class = this.classInvalid;
    return 'Можно использовать буквы и "-"';
  }
}
