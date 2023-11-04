import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() variant: 'small' | 'large' = 'large';
}
