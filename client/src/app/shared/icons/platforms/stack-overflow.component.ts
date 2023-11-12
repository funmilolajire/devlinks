import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-overflow',
  template: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      *ngIf="variant === 'large'"
    >
      <path
        d="M15.8199 18.2194V12.8844H17.6005V20H1.53613V12.8844H3.31051V18.2194H15.8199ZM5.09051 16.4419H14.043V14.6619H5.09051V16.4419ZM5.30926 12.3994L14.0436 14.2219L14.418 12.4969L5.68738 10.6769L5.30926 12.3994ZM6.44176 8.18688L14.5286 11.96L15.2805 10.335L7.19488 6.55937L6.44238 8.17438L6.44176 8.18688ZM8.70426 4.19938L15.5499 9.9125L16.683 8.56063L9.83738 2.85125L8.71051 4.19562L8.70426 4.19938ZM13.1249 0L11.6699 1.0775L17.008 8.24813L18.463 7.17062L13.1249 0Z"
        fill="white"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      *ngIf="variant === 'small'"
    >
      <g clip-path="url(#clip0_86_26158)">
        <path
          d="M12.6555 15.0755V10.8075H14.08V16.5H1.22852V10.8075H2.64802V15.0755H12.6555ZM4.07202 13.6535H11.234V12.2295H4.07202V13.6535ZM4.24702 10.4195L11.2345 11.8775L11.534 10.4975L4.54952 9.0415L4.24702 10.4195ZM5.15302 7.0495L11.6225 10.068L12.224 8.768L5.75552 5.7475L5.15352 7.0395L5.15302 7.0495ZM6.96302 3.8595L12.4395 8.43L13.346 7.3485L7.86952 2.781L6.96802 3.8565L6.96302 3.8595ZM10.4995 0.5L9.33552 1.362L13.606 7.0985L14.77 6.2365L10.4995 0.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_86_26158">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>`,
})
export class StackOverflowComponent {
  @Input() variant: 'small' | 'large' = 'large';
}
