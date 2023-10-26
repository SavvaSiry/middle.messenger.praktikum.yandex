import { Input } from '../index';

export class InputPassword extends Input {
  get isValid(): boolean {
    return (/^(?=.*[A-Z])(?=.*\d)[\w\D]{8,40}$/.test(this.value));
  }

  validate(): string {
    if (this.isValid) {
      this.props.class = this.classValid;
      return '';
    } if (this.value.length < 8) {
      this.props.class = this.classInvalid;
      return 'Пароль должен составлять 8 символов';
    } if (this.value.length > 40) {
      this.props.class = this.classInvalid;
      return 'Пароль должен быть меньше 40 символов';
    }
    this.props.class = this.classInvalid;
    return 'Пароль должен содержать цифру и заглвную букву';
  }
}
