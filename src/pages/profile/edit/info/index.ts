import { tmpl } from './profile.edit.info.tmpl';
import Block from '../../../../core/Block/Block';
import { Input } from '../../../../components/input';
import { ProfileInfoForm } from '../../../../components/form/profile/info';

export class ProfileEditInfo extends Block {
  constructor() {
    super('div', {
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          Object.entries(this.children)
            .forEach((child) => {
              if (child[1] instanceof Input) {
                child[1].validate();
              }
            });
        },
      },
    });
  }

  protected init() {
    this.children.profileInfoForm = new ProfileInfoForm({
      class: 'profile-form',
      attributes: [],
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
