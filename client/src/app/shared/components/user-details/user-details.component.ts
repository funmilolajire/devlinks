import { Component, Input } from '@angular/core';
import { UserDetails } from '../../types/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input() variant: 'mockup' | 'preview' = 'preview';

  @Input() user: UserDetails | null = null;

  get name() {
    return `${this.user?.firstName || ''} ${this.user?.lastName || ''}`.trim();
  }
  get mailto() {
    return `mailto:${this.user?.email}`;
  }
}
