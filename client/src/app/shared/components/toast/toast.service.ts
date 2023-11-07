import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

type IconType = 'save' | 'link' | 'error' | null;

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  showToast$ = new BehaviorSubject(false);
  text$ = new BehaviorSubject('');
  icon$ = new BehaviorSubject<IconType>(null);
  timeoutId?: number;
  constructor() {}

  toastHandler(text: string, icon: IconType = null) {
    this.text$.next(text);
    this.icon$.next(icon);
    this.showToast$.next(true);
    if (!!this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = window.setTimeout(() => this.showToast$.next(false), 3000);
  }
  closeToast() {
    this.showToast$.unsubscribe();
    this.text$.unsubscribe();
    this.icon$.unsubscribe();
    clearTimeout(this.timeoutId);
  }
}
