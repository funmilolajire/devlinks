import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private _secretKey = 'SecretKey';
  private encrypt(value: string) {
    return CryptoJS.AES.encrypt(value, this._secretKey).toString();
  }

  private decrypt(value: string) {
    return CryptoJS.AES.decrypt(value, this._secretKey).toString(
      CryptoJS.enc.Utf8
    );
  }

  getItem(key: string) {
    const data = localStorage.getItem(key) || null;
    return data ? JSON.parse(this.decrypt(data)) : null;
  }

  setItem(key: string, value: any) {
    const data = this.encrypt(JSON.stringify(value));
    localStorage.setItem(key, data);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
