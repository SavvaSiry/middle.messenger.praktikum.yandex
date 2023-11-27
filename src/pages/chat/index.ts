import { tmpl } from './chat.tmpl';
import Block from '../../core/Block/Block';
import { MessageForm } from '../../components/form/message';
import { State, withStore } from '../../core/Store';
import AuthController from '../../controllers/AuthController';
import { Link } from '../../components/link';
import router from '../../core/Router';
import { ChatPanelItem } from '../../components/chat/pannel/item';

export class BaseChat extends Block {

  protected componentDidMount(): void {
    AuthController.fetchUser();
  }

  protected init() {

     let item = new ChatPanelItem({
      attributes: [],
      class: 'chat-panel__list__item',
      title: 'Андрей А',
      text: 'Какой-то текст',
      time: '12:23',
      notify: '1',
      avatar: '',
    })

    let item2 = new ChatPanelItem({
      attributes: [],
      class: 'chat-panel__list__item',
      title: 'Андрей D',
      text: 'DКакой-то текст',
      time: '12:23',
      notify: '1',
      avatar: '',
    })

    this.children.chatPanelItems = [item, item2];


    this.children.messageForm = new MessageForm({
      attributes: [],
      class: 'chat-feed__bottom-bar',
    });

    this.children.settingsLink = new Link({
      attributes: [],
      text: 'Профиль',
      events: {
        click: () => {
          router.go('/settings');
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
