import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, timer } from 'rxjs';
import { ToastService } from 'src/app/shared/components/toast/toast.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  previewMode = true;
  // TODO link to be copied
  link = 'url link goes here';
  constructor(
    private router: Router,
    private location: Location,
    public toastService: ToastService
  ) {}
  ngOnInit() {
    this.previewMode = this.location.path() === '/preview';
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.previewMode = this.location.path() === '/preview';
      });
  }
  shareLink() {
    this.toastService.toastHandler(
      'The link has been copied to your clipboard!',
      'link'
    );
  }
}
