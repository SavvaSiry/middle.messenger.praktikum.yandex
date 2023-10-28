import Block from '../../utils/Block';

export interface ButtonProps {
  label: string,
  class: string,
  attributes: {
    name: string;
    value: string;
  }[],
  events?: {
    click: () => void;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  protected init() {
    this.element?.setAttribute('class', this.props.class);
  }

  render(): DocumentFragment {
    return this.compile('{{label}}', this.props);
  }
}
