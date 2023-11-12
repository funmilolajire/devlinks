import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UserDetails, UserLink } from 'src/app/shared/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  imageUrl = new FormControl('');
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', Validators.email);
  profileForm = new FormGroup({
    imageUrl: this.imageUrl,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
  });

  constructor(
    private toastService: ToastService,
    private userService: UserService
  ) {}

  userId: string = '';
  userLinks: UserLink[] = [];
  get profile() {
    return {
      ...this.profileForm.value,
      id: this.userId,
      links: this.userLinks,
    } as UserDetails;
  }
  ngOnInit(): void {
    this.userService.user$.subscribe((val) => {
      const { imageUrl, firstName, lastName, email, links, id } =
        val as UserDetails;
      this.profileForm.patchValue({ imageUrl, firstName, lastName, email });
      this.userLinks = links;
      this.userId = id;
    });
  }

  onChange(event: Event) {
    const files: FileList | null = (event.target as HTMLInputElement)?.files;
    const image: File | null = files ? files[0] : null;
    this.imageUrl.setValue('');
    if (image) {
      if (!['image/png', 'image/jpeg'].includes(image.type)) {
        this.toastService.toastHandler(
          'File type not supported. Image format should be PNG or JPG',
          'error'
        );
        return;
      }

      const reader = new FileReader();

      reader.onload = (evt) => {
        const result = `${evt.target?.result || ''}`;
        const newImage = new Image();
        newImage.onerror = (err) => {
          this.toastService.toastHandler(err as string, 'error');
          return;
        };
        newImage.onload = () => {
          if (newImage.width + newImage.height == 0) {
            newImage.onerror &&
              newImage.onerror('Invalid image. No dimensions found');
          } else if (newImage.width > 1024 || newImage.height > 1024) {
            newImage.onerror &&
              newImage.onerror(
                'Invalid dimensions. Dimensions should be below 1024/1024px'
              );
          } else {
            this.imageUrl.setValue(result);
          }
        };
        newImage.src = result;
      };
      reader.readAsDataURL(image);
    } else {
      this.toastService.toastHandler('No file selected', 'error');
    }
  }
  save() {
    if (this.userId) {
      this.userService.updateUser(this.userId, this.profileForm.value as any);
      this.userService.user$.next({
        ...(this.profileForm.value as any),
        id: this.userId,
        links: this.userLinks,
      });
      this.toastService.toastHandler(
        'Your changes have been successfully saved!',
        'save'
      );
    } else {
      this.toastService.toastHandler('User is not logged in!', 'error');
    }
  }
}
