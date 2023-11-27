import { tmpl } from './profile.edit.info.tmpl';
import Block from '../../../../core/Block/Block';
import { ProfileInfoForm } from '../../../../components/form/profile/info';
import AuthController from '../../../../controllers/AuthController';
import store, { State, withStore } from '../../../../core/Store';

export class BaseProfileEditInfo extends Block {

  protected componentDidMount(): void {
    AuthController.fetchUser();
  }

  protected init() {
    this.children.profileInfoForm = new ProfileInfoForm({
      class: 'profile-form',
      attributes: [],
      user: { ...store.getState().user }
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}

function mapStateToProps(state: State) {
  return { ...state.user };
}

export const ProfileEditInfo = withStore(mapStateToProps)(BaseProfileEditInfo);
