import { tmpl } from './chat.tmpl';
import Block from '../../core/Block/Block';
import { MessageForm } from '../../components/form/message';
import { State, withStore } from '../../core/Store';
import AuthController from '../../controllers/AuthController';
import { Link } from '../../components/link';
import router from '../../core/Router';

export class BaseChat extends Block {
  constructor() {
    super('div', {});
  }

  protected init() {
    this.children.messageForm = new MessageForm({
      attributes: [],
      class: 'chat-feed__bottom-bar',
    });

    this.children.settingsLink = new Link({
      attributes: [],
      text: 'Профиль',
      events: {
        click: () => {
          router.go('/settings')
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}

function mapStateToProps(state: State) {
  return { ...state.user };
}

export const Chat = withStore(mapStateToProps)(BaseChat);
