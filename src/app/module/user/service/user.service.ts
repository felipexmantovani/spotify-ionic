import { Injectable } from '@angular/core';
import { StorageService } from '../../../core/service/storage/storage.service';
import { User } from '../model/user';
import { USER_CONFIG } from '../user.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor(private storageService: StorageService) {}

  public create(): User {
    this.user = new User();
    this.user.name = 'Felipe',
    this.user.lastName = 'Mantovani',
    this.user.fullName = `${this.user.name} ${this.user.lastName}`,
    this.user.photo = 'https://avatars1.githubusercontent.com/u/4302885?s=460&v=4'
    return this.user;
  }

  public getStorage(): Promise<User> {
    return new Promise((resolve, reject) => {
      this.storageService
        .getKey(USER_CONFIG.storageKey)
        .then((json: string) => {
          resolve((JSON.parse(json) as User));
        })
        .catch((error) => {
          reject(`catch: ${error}`);
        });
    });
  }
}
