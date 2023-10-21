import { tmpl } from './error404.tmpl';
import Block from '../../../utils/Block';

// interface ErrorProps {
//     code: string,
//     title: string,
//     link: string,
// }

export class Error404 extends Block {
  constructor() {
    super('div', {});
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
