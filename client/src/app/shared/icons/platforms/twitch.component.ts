import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twitch',
  template: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      *ngIf="variant === 'large'"
    >
      <path
        d="M9.70007 4.9415H10.8917V8.50817H9.70007M12.9751 4.9415H14.1667V8.50817H12.9751M5.8334 1.6665L2.8584 4.6415V15.3582H6.42506V18.3332L9.4084 15.3582H11.7834L17.1417 9.99984V1.6665M15.9501 9.40817L13.5751 11.7832H11.1917L9.1084 13.8665V11.7832H6.42506V2.85817H15.9501V9.40817Z"
        fill="currentColor"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      *ngIf="variant === 'small'"
    >
      <path
        d="M7.76044 3.9535H8.71378V6.80683H7.76044M10.3804 3.9535H11.3338V6.80683H10.3804M4.66711 1.3335L2.28711 3.7135V12.2868H5.14044V14.6668L7.52711 12.2868H9.42711L13.7138 8.00016V1.3335M12.7604 7.52683L10.8604 9.42683H8.95378L7.28711 11.0935V9.42683H5.14044V2.28683H12.7604V7.52683Z"
        fill="currentColor"
      />
    </svg>`,
})
export class TwitchComponent {
  @Input() variant: 'small' | 'large' = 'large';
}
