import { IPasswordSettings, IUserSettings, SettingsAPI } from '../api/SettingsAPI';
import router from '../core/Router';
import store from '../core/Store';

class SettingsController {
  private api = new SettingsAPI();

  async editProfile(data: IUserSettings) {
    try {
      const profile = await this.api.editProfile(data);
      console.log(profile);
    } catch (e) {
      console.log(e);
    }
  }

  async editPassword(data: IPasswordSettings) {
    try {
      await this.api.editPassword(data);

      router.go('/settings');
    } catch (e) {
      console.log(e);
    }
  }

  async editAvatar(data: File) {
    try {
      if (this.validateAvatar) {
        await this.api.editAvatar(data);
      }

    } catch (e) {
      console.log(e);
    }
  }

  allowedMimeTypes: string[] = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
  ];

  private validateAvatar(avatar: File): boolean {
    return this.allowedMimeTypes.includes(avatar.type);
  }

}
