import Block from '../../core/Block/Block';
import { tmpl } from './index.tmpl';

export class Home extends Block {
  constructor() {
    super('div', {});
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
