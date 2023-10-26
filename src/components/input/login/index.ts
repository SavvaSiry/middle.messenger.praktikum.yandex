import { Input } from '../index';

export class InputLogin extends Input {
  get isValid(): boolean {
    return (/^(?=.*[A-Za-zА-Яа-я])[A-Za-zА-Яа-я0-9_-]{3,20}$/.test(this.value));
  }

  validate(): string {
    if (this.isValid) {
      this.props.class = this.classValid;
      return '';
    }
    this.props.class = this.classInvalid;
    return 'Разрешаются только буквы цифры и знаки "-" и "_"';
  }
}
