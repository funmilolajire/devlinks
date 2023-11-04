import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-facebook',
  template: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      *ngIf="variant === 'large'"
    >
      <g clip-path="url(#clip0_86_26460)">
        <path
          d="M19.9996 10.061C19.9996 4.50354 15.5221 -0.00146484 9.99957 -0.00146484C4.47457 -0.000214844 -0.00292969 4.50354 -0.00292969 10.0623C-0.00292969 15.0835 3.65457 19.246 8.43457 20.001V12.9698H5.89707V10.0623H8.43707V7.84354C8.43707 5.32229 9.93082 3.92979 12.2146 3.92979C13.3096 3.92979 14.4533 4.12604 14.4533 4.12604V6.60104H13.1921C11.9508 6.60104 11.5633 7.37729 11.5633 8.17354V10.061H14.3358L13.8933 12.9685H11.5621V19.9998C16.3421 19.2448 19.9996 15.0823 19.9996 10.061Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_86_26460">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      *ngIf="variant === 'small'"
    >
      <g clip-path="url(#clip0_86_26141)">
        <path
          d="M16 8.04902C16 3.60302 12.418 -0.000976562 8.00005 -0.000976562C3.58005 2.34375e-05 -0.00195312 3.60302 -0.00195312 8.05002C-0.00195312 12.067 2.92405 15.397 6.74805 16.001V10.376H4.71805V8.05002H6.75005V6.27502C6.75005 4.25802 7.94505 3.14402 9.77205 3.14402C10.648 3.14402 11.563 3.30102 11.563 3.30102V5.28102H10.554C9.56105 5.28102 9.25105 5.90202 9.25105 6.53902V8.04902H11.469L11.115 10.375H9.25005V16C13.074 15.396 16 12.066 16 8.04902Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_86_26141">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>`,
})
export class FacebookComponent {
  @Input() variant: 'small' | 'large' = 'large';
}
