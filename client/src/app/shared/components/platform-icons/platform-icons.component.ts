import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-platform-icons',
  templateUrl: './platform-icons.component.html',
  styleUrls: ['./platform-icons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlatformIconsComponent {
  @Input({ required: true }) platform?: string;
}
