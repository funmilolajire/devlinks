import { Component } from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
})
export class ServerErrorComponent {
  contactSupport() {
    alert('Yello 🙃');
  }

  reloadPage() {
    alert('Nope 😐');
  }
}
