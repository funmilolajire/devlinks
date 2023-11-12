import { Component, Input } from '@angular/core';
import { UserLink } from '../../types/user';
import { DevLinksService } from '../../services/dev-links.service';

@Component({
  selector: 'app-dev-link',
  templateUrl: './dev-link.component.html',
  styleUrls: ['./dev-link.component.scss'],
})
export class DevLinkComponent {
  @Input({ required: true }) link: UserLink | null = null;
  @Input() variant: 'small' | 'large' = 'large';

  constructor(private devlinksService: DevLinksService) {}

  get platformId() {
    return this.devlinksService.getPlatformId(this.link?.platform || '');
  }
}
