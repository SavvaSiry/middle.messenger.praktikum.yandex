import Block from '../../utils/Block';
import { InputLogin } from '../input/login';

interface InputProps {
  attributes: {
    name: string,
    value: string
  }[],
  class: string,
  label: string,
  events?: {
    blur: () => void,
  }
}

export class NewInput extends Block {

  constructor(props: InputProps) {
    super('div', props);
    console.log(this);
  }

  protected init() {
    this.children.input = new InputLogin({
      attributes: [],
      class: 'login-form__input',
      events: {
        blur: () => {
          if (this.children.input.isValid) {
            this.props.errorMessage = '';
          } else {
            this.props.errorMessage = 'Плохо';
          }
          this.children.input.validate();
        }
      }
    }, 'login-form__input', 'login-form__input invalid');
  }

  render(): DocumentFragment {
    return this.compile(`
    <label class="login-form__label text_light" for="username">{{label}}</label>
      {{{input}}}
    <span class="login-form__error">{{errorMessage}}</span>
    `, this.props);
  }
}
