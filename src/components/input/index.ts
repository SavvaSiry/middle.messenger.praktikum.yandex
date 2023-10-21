import Block from '../../utils/Block';

interface InputProps {
  attributes: {
    name: string,
    value: string
  }[],
  class: string,
  events?: {
    blur: () => void,
    submit: () => void,
  }
}

export class Input extends Block {

  constructor(props: InputProps, classValid: string, classInvalid: string) {

    if (!props.events || !props.events.blur) {
      props.events = {
        blur: () => {
          if (this.isValid) {
            this.props.class = classValid;
          } else {
            this.props.class = classInvalid;
          }
        },
        submit: () => {
          console.log("Submit")
          if (this.isValid) {
            this.props.class = classValid;
          } else {
            this.props.class = classInvalid;
          }
        }
      };
    }

    super('input', props);
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

  render() {
    return this.compile('', this.props);
  }
}
