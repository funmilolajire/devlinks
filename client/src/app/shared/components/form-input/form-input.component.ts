import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class TextInputComponent {
  @Input({ required: true }) label = '';
  @Input() error = '';
}
