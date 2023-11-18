import { tmpl } from './error500.tmpl';
import Block from '../../../core/Block/Block';

export class Error500 extends Block {
  constructor() {
    super('div', {});
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
