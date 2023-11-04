import { Injectable } from '@angular/core';

export interface DevLink {
  id: string;
  displayName: string;
}

const allDevLinks: DevLink[] = [
  {
    id: 'github',
    displayName: 'GitHub',
  },
  {
    id: 'frontend_mentor',
    displayName: 'Frontend Mentor',
  },
  {
    id: 'twitter',
    displayName: 'Twitter',
  },
  {
    id: 'linkedin',
    displayName: 'LinkedIn',
  },
  {
    id: 'youtube',
    displayName: 'YouTube',
  },
  {
    id: 'facebook',
    displayName: 'Facebook',
  },
  {
    id: 'twitch',
    displayName: 'Twitch',
  },
  {
    id: 'dev_to',
    displayName: 'Dev.to',
  },
  {
    id: 'codewars',
    displayName: 'Codewars',
  },
  {
    id: 'codepen',
    displayName: 'Codepen',
  },
  {
    id: 'freecodecamp',
    displayName: 'freeCodeCamp',
  },
  {
    id: 'gitlab',
    displayName: 'GitLab',
  },
  {
    id: 'hashnode',
    displayName: 'Hashnode',
  },
  {
    id: 'stack_overflow',
    displayName: 'Stack Overflow',
  },
];

@Injectable({
  providedIn: 'root',
})
export class DevLinksService {
  devLinks: DevLink[] = allDevLinks;
  constructor() {}

  getDisplayName(id: string) {
    return allDevLinks.find((devlink) => devlink.id === id)?.displayName;
  }
}
