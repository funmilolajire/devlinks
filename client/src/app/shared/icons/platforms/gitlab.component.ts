import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gitlab',
  template: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      *ngIf="variant === 'large'"
    >
      <path
        d="M18.0529 8.32265L18.0295 8.26265L15.7637 2.35098C15.7179 2.23435 15.6362 2.13528 15.5305 2.06803C15.4248 2.00079 15.3004 1.96885 15.1754 1.97682C15.0502 1.98239 14.93 2.02749 14.8321 2.10565C14.7342 2.18381 14.6635 2.291 14.6304 2.41182L13.1004 7.10015H6.90203L5.36953 2.41265C5.33673 2.29178 5.26649 2.18442 5.16887 2.10596C5.07125 2.02751 4.95129 1.98201 4.82619 1.97598C4.70114 1.96918 4.57709 2.00168 4.47143 2.06893C4.36577 2.13618 4.28381 2.23481 4.23703 2.35098L1.96869 8.27098L1.94536 8.32932C1.6197 9.18193 1.57965 10.1172 1.83122 10.9945C2.08278 11.8719 2.61238 12.6438 3.34036 13.1943L3.34869 13.2002L3.36869 13.216L6.82453 15.8027L8.53286 17.0968L9.57203 17.8835C9.69396 17.9756 9.84258 18.0254 9.99536 18.0254C10.1481 18.0254 10.2968 17.9756 10.4187 17.8835L11.4579 17.0968L13.1662 15.8027L16.6429 13.2002L16.6512 13.1935C17.3818 12.6437 17.9137 11.8711 18.1665 10.9925C18.4194 10.1138 18.3795 9.17667 18.0529 8.32265Z"
        fill="white"
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
        d="M14.4419 6.65812L14.4232 6.61012L12.6106 1.88079C12.5739 1.78748 12.5086 1.70822 12.424 1.65443C12.3394 1.60063 12.2399 1.57508 12.1399 1.58145C12.0398 1.58591 11.9436 1.62199 11.8653 1.68452C11.7869 1.74705 11.7304 1.8328 11.7039 1.92945L10.4799 5.68012H5.52123L4.29523 1.93012C4.269 1.83343 4.2128 1.74753 4.1347 1.68477C4.05661 1.62201 3.96064 1.58561 3.86056 1.58079C3.76052 1.57534 3.66128 1.60134 3.57675 1.65514C3.49223 1.70894 3.42666 1.78785 3.38923 1.88079L1.57456 6.61679L1.5559 6.66345C1.29537 7.34554 1.26333 8.09377 1.46458 8.79564C1.66584 9.49751 2.08951 10.1151 2.6719 10.5555L2.67857 10.5601L2.69456 10.5728L5.45923 12.6421L6.8259 13.6775L7.65723 14.3068C7.75477 14.3804 7.87367 14.4203 7.9959 14.4203C8.11813 14.4203 8.23702 14.3804 8.33457 14.3068L9.1659 13.6775L10.5326 12.6421L13.3139 10.5601L13.3206 10.5548C13.905 10.115 14.3306 9.49692 14.5328 8.79397C14.7351 8.09102 14.7032 7.34133 14.4419 6.65812Z"
        fill="#737373"
      />
    </svg>`,
})
export class GitlabComponent {
  @Input() variant: 'small' | 'large' = 'large';
}