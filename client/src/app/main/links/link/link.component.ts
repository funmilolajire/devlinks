import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DevLinksService } from 'src/app/shared/services/dev-links.service';

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

  constructor(private devLinksService: DevLinksService) {}

  get placeholder() {
    const placeholder =
      this.devLinksService.devLinks.find(
        (link) =>
          (this.linkGroup.get('platform')?.value || '') === link.displayName
      )?.placeholder || 'https://';
    return placeholder;
  }

  changePlatformHandler(platform: string) {
    this.changePlatform.emit(platform);
  }

  removeLinkHandler() {
    this.removeLink.emit();
  }
}
