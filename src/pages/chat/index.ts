import { tmpl } from './chat.tmpl';
import Block from '../../utils/Block';
import { MessageForm } from '../../components/form/message';

export class Chat extends Block {
  constructor() {
    super('div', {});
  }

  protected init() {
    this.children.messageForm = new MessageForm({
      attributes: [],
      class: 'chat-feed__bottom-bar',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
