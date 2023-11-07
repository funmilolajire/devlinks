import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextInputComponent {
  @Input() label = '';
  @Input() for = '';
  @Input() error = '';
}
