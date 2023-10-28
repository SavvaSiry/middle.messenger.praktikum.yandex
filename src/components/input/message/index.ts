import { Input } from '../index';

export class InputMessage extends Input {
  get isValid(): boolean {
    return !(this.value.trim() === '');
  }

  validate(): string {
    if (this.isValid) {
      this.props.class = this.classValid;
      return '';
    }
    this.props.class = this.classInvalid;
    return 'Invalid';
  }
}
