import { API } from './api';
import { ISignInData } from './AuthAPI';

export interface IUserSettings {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface IAvatarSettings {

}

export interface IPasswordSettings {
  oldPassword: string;
  newPassword: string;
}

export class SettingsAPI extends API {

  constructor() {
    super('/user');
  }

  editProfile(data: IUserSettings): Promise<void> {
    return this.http.put('/profile', data);
  }

  editAvatar(data: File): Promise<void> {
    return this.http.put('/profile/avatar', data, true);
  }

  editPassword(data: IPasswordSettings): Promise<void> {
    return this.http.put('/password', data);
  }

}
