import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';
import { ToastService } from '../components/toast/toast.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  storageKey = 'auth';

  constructor(
    private lsService: LocalStorageService,
    private userService: UserService,
    private toastService: ToastService
  ) {}

  login(email: string, password: string) {
    const user = this.userService.getUser(email);
    console.log(password);
    if (password !== user.password) {
      this.toastService.toastHandler('Incorrect password', 'error');
      throw new Error('Password is incorrect');
    }
    this.lsService.setItem(this.storageKey, { email, password });
    return this.getLoggedInUser(user.id);
  }

  register(email: string, password: string) {
    this.userService.createUser(email, password);
    // TODO remove
    this.toastService.toastHandler('User successfully registered', 'save');
    return this.login(email, password);
  }

  checkSession(email: string) {
    const sessionUser = this.lsService.getItem(this.storageKey) || '';
    return sessionUser;
  }

  getLoggedInUser(id: string) {
    if (this.checkSession(id)) {
      return {
        auth: this.checkSession(id),
        user: this.userService.getUser(id),
      };
    }
    throw new Error('No logged in user');
  }

  logout(email: string) {
    this.lsService.removeItem(this.storageKey);
    return { message: 'User logged out' };
  }
}
