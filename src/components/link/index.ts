import Block from '../../core/Block/Block';

interface LinkProps {
  text: string,
  attributes: {
    name: string;
    value: string;
  }[],
  events: {
    click: (event: Event) => void;
  }
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super('a', props);
  }

  render(): DocumentFragment {
    return this.compile(`
    {{text}}
    `, this.props);
  }
}
