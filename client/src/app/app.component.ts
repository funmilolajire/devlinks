import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet /><app-toast />`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        position: relative;
      }
    `,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.userService.user$.next(
      this.authService.getLoggedInUser()?.user || null
    );
  }

  ngOnDestroy(): void {
    this.userService.user$.unsubscribe();
  }
}
