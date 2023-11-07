import { Component } from '@angular/core';
import { UserDetails } from 'src/app/shared/types/user';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  user: UserDetails = {
    id: '1',
    firstName: 'Ben',
    lastName: 'Wright',
    email: 'ben@example.com',
    imageUrl:
      'https://media.istockphoto.com/id/1157362474/photo/beautiful-woman-behind-leaves.jpg?s=612x612&w=0&k=20&c=E6hZbwKL4qpjUQciK1A6q8XF_7_e7rXcLdo1uXhYC-0=',
    links: [
      { platform: 'github', url: 'http://github' },
      { platform: 'youtube', url: 'http://github' },
      { platform: 'linkedin', url: 'http://github' },
      // { platform: 'codepen', url: 'http://github' },
      // { platform: 'codewars', url: 'http://github' },
      // { platform: 'frontend_mentor', url: 'http://github' },
    ],
  };
}
