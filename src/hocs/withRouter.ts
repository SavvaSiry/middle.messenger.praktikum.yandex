import Block from '../core/Block/Block';
import router from '../core/Router';

export function withRouter(Component: typeof Block<any>) {
  type Props = typeof Component extends typeof Block<infer P extends Record<string, any>> ? P : any;

  return class extends Component {
    constructor(props: Props & PropsWithRouter) {
      super('div',{ ...props, router });
    }
  }
}

export interface PropsWithRouter {
  router: typeof router;
}


