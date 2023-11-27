import Block from '../../core/Block/Block';
import { Input } from '../input';

export interface FormProps {
  class: string,
  error: string,
  attributes: {
    name: string;
    value: string;
  }[],
  events?: {
    submit: (event: Event) => void;
  };
}

interface FormData {
  [key: string]: string;
}

export class Form extends Block {
  constructor(props: FormProps) {
    if (!props.events) {
      props.events = {
        submit: (event: Event) => {
          event.preventDefault();
          const data: FormData = {};

          Object.entries(this.children)
            .forEach((child) => {
              if (child[1] instanceof Input) {
                child[1].element?.blur();
                data[child[1].name] = child[1].value;
              }
            });

          console.log(data);
        },
      };
    }
    super('form', props);
  }
}
