import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, timer } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  previewMode = true;
  showPopup = false;
  // TODO link to be copied
  link = 'url link goes here';
  constructor(private router: Router, private location: Location) {}
  ngOnInit() {
    this.previewMode = this.location.path() === '/preview';
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.previewMode = this.location.path() === '/preview';
      });
  }
  shareLink() {
    this.showPopup = true;
    timer(3000).subscribe(() => (this.showPopup = false));
  }
}
