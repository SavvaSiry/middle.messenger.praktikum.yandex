import { tmpl } from './profile.edit.pass.tmpl';
import Block from '../../../../core/Block/Block';
import { ProfilePasswordForm } from '../../../../components/form/profile/pass';

export class ProfileEditPass extends Block {
  constructor() {
    super('div', {});
  }

  protected init() {
    this.children.profilePasswordForm = new ProfilePasswordForm({
      attributes: [],
      class: 'profile-form',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
