import Block from '../../utils/Block';
import { tmpl } from './index.tmpl';

export class Home extends Block {
  constructor() {
    super('div', {});
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
