import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { UserDetails } from '../../types/user';

@Component({
  selector: 'app-mockup',
  templateUrl: './mockup.component.html',
  styleUrls: ['./mockup.component.scss'],
})
export class MockupComponent {
  @Input() user: UserDetails | null = null;
  @Input() inProfile = false;
  emptySlots: number[] = [];

  // ngOnInit(): void {
  //   if (this.inProfile || (this.user && this.user.links.length >= 5)) {
  //     this.emptySlots = [];
  //   } else {
  //     this.emptySlots = Array(5 - (this.user?.links.length || 0));
  //   }
  // }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.inProfile || (this.user && this.user.links.length >= 5)) {
      this.emptySlots = [];
    } else {
      this.emptySlots = Array(5 - (this.user?.links.length || 0));
    }
  }
}
