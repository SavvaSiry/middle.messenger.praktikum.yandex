import Block from '../../../../core/Block/Block';

interface ChatPanelItemProps {
  title: string,
  text: string,
  time: string,
  notify: string,
  avatar: string,
  class: string,
  attributes: {
    name: string;
    value: string;
  }[],
  // events?: {
  //   click: () => void;
  // };
}

export class ChatPanelItem extends Block {

  constructor(props: ChatPanelItemProps) {
    super('li', props);
  }

  protected init() {
    this.element?.setAttribute('class', this.props.class);
  }

  render(): DocumentFragment {
    return this.compile(`
<!--            <li class="chat-panel__list__item">-->
                <div class="chat-panel__list__item__avatar">
                    {{ avatar }}
                </div>
                <div class="chat-panel__list__item__content">
                    <div class="text_dark title">{{ title }}</div>
                    <div class="text_light text">{{ text }}</div>
                </div>
                <div class="chat-panel__list__item__notify">
                    <div class="time text_light">{{ time }}</div>
                    <div class="notify">{{ notify }}</div>
                </div>
<!--            </li>-->
    `, this.props);
  }
}
