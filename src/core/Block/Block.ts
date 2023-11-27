import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';

import { EventBus } from '../EventBus/EventBus';

// Нельзя создавать экземпляр данного класса
class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(6);

  protected props: P;

  public children: Record<string, Block> | Record<string, Block>[];

  private eventBus: () => EventBus;

  private _element: HTMLElement | null = null;

  private _meta: { tagName: string; props: P; };

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = 'div', propsWithChildren: P) {
    const eventBus = new EventBus();

    const {
      props,
      children,
    } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
      tagName,
      props: props as P,
    };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: P): { props: P, children: Record<string, Block> } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps)
      .forEach(([key, value]) => {
        if (value instanceof Block) {
          children[key as string] = value;
        } else {
          props[key] = value;
        }
      });

    return {
      props: props as P,
      children,
    };
  }

  private _addEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };

    Object.keys(events)
      .forEach((eventName) => {
        this._element?.addEventListener(eventName, events[eventName]);
      });
  }

  private _removeEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };

    Object.keys(events)
      .forEach((eventName) => {
        this._element?.removeEventListener(eventName, events[eventName]);
      });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  // Для простоты использования сделал так, знаю,
  // что не самый лучший вариант, но эффективный и быстрый
  _addAttributes() {
    this._addClass();

    type AttributeType = { name: string, value: string }

    if (this.props.attributes) {
      this.props.attributes
        .forEach((attr: AttributeType) => this._element?.setAttribute(attr.name, attr.value));
    }
  }

  _addClass() {
    if (this.props.class) {
      this._element?.setAttribute('class', this.props.class);
    }
  }

  private _init() {
    this._createResources();

    this.init();

    this.eventBus()
      .emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {
  }

  public dispatchComponentDidMount() {
    this.eventBus()
      .emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children)
      .forEach((child) => {
        if (child instanceof Array) {
          child.forEach((child) => child.dispatchComponentDidMount());
        } else {
          child.dispatchComponentDidMount();
        }
      });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus()
        .emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: P, newProps: P) {
    console.log(oldProps, newProps);
    return true;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();

    this._removeEvents();

    this._element!.textContent = '';

    this._addAttributes();

    this._element!.append(fragment);

    this._addEvents();
  }

  /* ВАЖНО:
  * Ниже был добавлен костыль с блокировкой потока на выполнение, так как
  * event "SUBMIT" - при нажатии на ENTER вызывает событие "BLUR", что
  * приводит к одновременному обновлению данных двумя потоками, что в конечном
  * итоге приводит к ошибке, так как первый поток заканчивает обновление раньше,
  * а второй поток обновляет уже не существующие данные
  *  */
  private isExecuting: boolean = false;

  protected compile(template: string, context: any) {
    const temp = document.createElement('template');

    if (!this.isExecuting) {
      this.isExecuting = true;

      const contextAndStubs = { ...context };

      Object.entries(this.children)
        .forEach(([name, component]) => {
          if (component instanceof Array) {
            contextAndStubs[name] = component.map((item) => `<div data-id="${item.id}"></div>`)
              .join('');
          } else {
            contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
          }
        });

      console.log(contextAndStubs);

      const html = Handlebars.compile(template)(contextAndStubs);
      temp.innerHTML = html;

      const postCompile: Function = (component: Block) => {
        const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
        if (!stub) {
          return;
        }

        component.getContent()
          ?.append(...Array.from(stub.childNodes));

        stub.replaceWith(component.getContent()!);
      };

      Object.entries(this.children)
        .forEach(([, component]) => {
          if (component instanceof Array) {
            component.forEach(postCompile);
          } else {
            postCompile(component);
          }
        });

      this.isExecuting = false;
      return temp.content;
    }
    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: P) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value: any = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };

        target[prop as keyof P] = value;

        self.eventBus()
          .emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty(): boolean {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;
