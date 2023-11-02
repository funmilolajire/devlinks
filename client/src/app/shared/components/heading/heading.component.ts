import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: '<h2 class="heading">{{heading}}</h2>',
  styles: [
    `
      @use 'config' as *;
      .heading {
        color: $grey-dark;
        @extend %heading-m;
      }

      @media all and (max-width: 550px) {
        .heading {
          font-size: 2.4rem;
        }
      }
    `,
  ],
})
export class HeadingComponent {
  @Input({ required: true }) heading = '';
}
