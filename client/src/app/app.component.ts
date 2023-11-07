import { Component } from '@angular/core';

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
export class AppComponent {}
