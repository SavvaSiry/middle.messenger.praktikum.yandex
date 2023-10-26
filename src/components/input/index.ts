import Block from '../../utils/Block';

interface InputProps {
  attributes: {
    name: string,
    value: string
  }[],
  class: string,
  events?: {
    blur: () => void,
  }
}

export class Input extends Block {
  protected classValid: string;

  protected classInvalid: string;

  constructor(props: InputProps, classValid: string, classInvalid: string) {
    if (!props.events || !props.events.blur) {
      props.events = {
        blur: () => {
          this.validate();
          // if (this.isValid) {
          //   this.props.class = classValid;
          // } else {
          //   this.props.class = classInvalid;
          // }
        },
      };
    }

    super('input', props);

    this.classValid = classValid;
    this.classInvalid = classInvalid;
  }

  public validate(): string {
    if (this.isValid) {
      this.props.class = this.classValid;
      return 'Valid';
    }
    this.props.class = this.classInvalid;
    return 'Invalid';
  }

  get isValid() {
    return true;
  }

  get value() {
    return (this.element! as HTMLInputElement).value;
  }

  get name() {
    return (this.element! as HTMLInputElement).name;
  }
}
