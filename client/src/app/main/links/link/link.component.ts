import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-link-item',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input({ required: true }) linkGroup: FormGroup = new FormGroup({});
  @Input({ required: true }) index: number = 0;
  @Output() changePlatform = new EventEmitter<string>();
  @Output() removeLink = new EventEmitter<number>();

  changePlatformHandler(platform: string) {
    this.changePlatform.emit(platform);
  }

  removeLinkHandler() {
    this.removeLink.emit();
  }
}
