export interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  links: UserLink[];
}

export interface UserLink {
  platform: string;
  url: string;
}
