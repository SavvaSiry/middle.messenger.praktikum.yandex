import { Input } from '../index';

export class InputName extends Input {
  get isValid(): boolean {
    return (/^[A-ZА-Я][A-Za-zА-Яа-я]+$/.test(this.value));
  }

  validate(): string {
    if (this.isValid) {
      this.props.class = this.classValid;
      return '';
    } if (!/^[A-ZА-Я]/.test(this.value)) {
      return 'Строка должна начинаться с заглавной буквы';
    } return 'Допускаются только буквы и знак "-"';
  }
}
