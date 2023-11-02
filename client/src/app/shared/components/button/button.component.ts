import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() type: 'button' | 'reset' | 'submit' = 'button';
  @Input({ required: true }) label = '';
  @Input() disabled = false;
  @Output() clickHandler: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.clickHandler.emit();
  }
}
