import { Injectable } from '@angular/core';

export interface DevLink {
  id: string;
  displayName: string;
  placeholder: string;
  urlPattern: string;
}

const allDevLinks: DevLink[] = [
  {
    id: 'github',
    displayName: 'GitHub',
    placeholder: 'https://github.com/:username',
    urlPattern: 'https://github.com/',
  },
  {
    id: 'frontend_mentor',
    displayName: 'Frontend Mentor',
    placeholder: 'https://www.frontendmentor.io/profile/:username',
    urlPattern: 'https://www.frontendmentor.io/profile/',
  },
  {
    id: 'twitter',
    displayName: 'Twitter',
    placeholder: 'https://twitter.com/:username',
    urlPattern: 'https://twitter.com/',
  },
  {
    id: 'linkedin',
    displayName: 'LinkedIn',
    placeholder: 'https://www.linkedin.com/in/:username',
    urlPattern: 'https://www.linkedin.com/in/',
  },
  {
    id: 'youtube',
    displayName: 'YouTube',
    placeholder: 'https://www.youtube.com/@username',
    urlPattern: 'https://www.youtube.com/@',
  },
  {
    id: 'facebook',
    displayName: 'Facebook',
    placeholder: 'https://www.facebook.com/:username',
    urlPattern: 'https://www.facebook.com/',
  },
  {
    id: 'twitch',
    displayName: 'Twitch',
    placeholder: 'https://www.twitch.tv/:username',
    urlPattern: 'https://www.twitch.tv/',
  },
  {
    id: 'dev_to',
    displayName: 'Dev.to',
    placeholder: 'https://dev.to/:username',
    urlPattern: 'https://dev.to/',
  },
  {
    id: 'codewars',
    displayName: 'Codewars',
    placeholder: 'https://www.codewars.com/users/:username',
    urlPattern: 'https://www.codewars.com/users/',
  },
  {
    id: 'codepen',
    displayName: 'Codepen',
    placeholder: 'https://codepen.io/:username',
    urlPattern: 'https://codepen.io/',
  },
  {
    id: 'freecodecamp',
    displayName: 'freeCodeCamp',
    placeholder: 'https://www.freecodecamp.org/:username',
    urlPattern: 'https://www.freecodecamp.org/',
  },
  {
    id: 'gitlab',
    displayName: 'GitLab',
    placeholder: 'https://gitlab.com/:username',
    urlPattern: 'https://gitlab.com/',
  },
  {
    id: 'hashnode',
    displayName: 'Hashnode',
    placeholder: 'https://hashnode.com/@username',
    urlPattern: 'https://hashnode.com/@',
  },
  {
    id: 'stack_overflow',
    displayName: 'Stack Overflow',
    placeholder: 'https://stackoverflow.com/users/:id/:username',
    urlPattern: 'https://stackoverflow.com/users/',
  },
];

@Injectable({
  providedIn: 'root',
})
export class DevLinksService {
  devLinks: DevLink[] = allDevLinks;
  constructor() {}

  getDisplayName(id: string) {
    return (
      this.devLinks.find((devlink) => devlink.id === id)?.displayName || ''
    );
  }
  getPlatformId(platform: string) {
    return (
      this.devLinks.find((link) => link.displayName === platform)?.id || ''
    );
  }
}
