import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from '../types/user';
import { LocalStorageService } from './local-storage.service';
import { ToastService } from '../components/toast/toast.service';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class UserService {
  storageKey = 'user';
  user$ = new BehaviorSubject<UserDetails | null>(null);
  constructor(
    private lsService: LocalStorageService,
    private toastService: ToastService
  ) {}

  getAllUsers() {
    const users = this.lsService.getItem(this.storageKey) || [];
    return users as (UserDetails & { password?: string })[];
  }

  getUser(id: string) {
    const user = this.getAllUsers().find(
      (user) => user.id === id || user.email === id
    ) as UserDetails & { password?: string };
    if (user) {
      return user;
    }
    this.toastService.toastHandler('User not found', 'error');
    throw new Error('User not found');
  }

  getSafeAllUsers() {
    return (
      this.getAllUsers()?.map((user) => {
        delete user.password;
        return user;
      }) || []
    );
  }

  getSafeUser(id: string) {
    const user = this.getUser(id);
    delete user?.password;
    return user as UserDetails;
  }

  createUser(email: string, password: string) {
    const userExists =
      (this.getAllUsers().find(
        (user) => user.email === email
      ) as UserDetails & { password?: string }) || '';
    if (userExists) {
      this.toastService.toastHandler(
        'User already exists. Login instead',
        'error'
      );
      throw new Error('User already exists.');
    }
    const user = {} as UserDetails & { password: string };
    user.email = email;
    user.password = password;
    user.id = uuid();
    const users = this.lsService.getItem(this.storageKey) || [];
    users.push(user);
    this.lsService.setItem(this.storageKey, users);
    return user;
  }

  updateUser(id: string, details: Partial<UserDetails>) {
    const users = this.lsService.getItem(this.storageKey) as (UserDetails & {
      password?: string;
    })[];
    const user = this.getUser(id);
    const userIndex = users.findIndex((_user) => user.id === _user.id);
    const updatedUser = { ...user, ...details };
    users.splice(userIndex, 1, updatedUser);
    this.lsService.setItem(this.storageKey, users);
    return updatedUser;
  }

  deleteUser(id: string) {
    const users = this.lsService.getItem(this.storageKey) as (UserDetails & {
      password?: string;
    })[];
    const user = this.getUser(id);
    const userIndex = users.findIndex((_user) => user.id === _user.id);
    users.splice(userIndex, 1);
    this.lsService.setItem(this.storageKey, users);
    return { message: 'User deleted' };
  }
}
