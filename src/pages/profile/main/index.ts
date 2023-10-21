import { tmpl } from './profile.main.tmpl';
import Block from '../../../utils/Block';

export class Profile extends Block {
  constructor() {
    super('div', {});
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
