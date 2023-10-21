import { Button, ButtonProps } from '../index';
import { Input } from '../../input';
import Block from '../../../utils/Block';

interface formData {
  [key: string]: string;
}

export class SubmitButton extends Button {
  constructor(props: ButtonProps, children: Record<string, Block<any>>) {
    if (!props.events || !props.events.click) {
      {
        props.events = {
          click: () => {
            const formData: formData = {};

            Object.entries(children)
              .forEach((child) => {
                if (child[1] instanceof Input) {
                  formData[child[1].name] = child[1].value;
                }
              });

            console.log(formData);
          },
        };
      }
    }

    super(props);
  }
}
