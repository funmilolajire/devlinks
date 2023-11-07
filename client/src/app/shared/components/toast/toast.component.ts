import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit, OnDestroy {
  text = '';
  icon: 'save' | 'link' | 'error' | null = null;
  showToast = false;
  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.text$.subscribe((val) => (this.text = val));
    this.toastService.icon$.subscribe((val) => (this.icon = val));
    this.toastService.showToast$.subscribe((val) => (this.showToast = val));
  }

  ngOnDestroy(): void {
    this.toastService.closeToast();
  }
}
