import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { DevLinksService } from 'src/app/shared/services/dev-links.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { UserService } from 'src/app/shared/services/user.service';
import { UserDetails } from 'src/app/shared/types/user';

type LinkType = FormGroup<{
  platform: FormControl<string | null>;
  url: FormControl<string | null>;
}>;
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  linksForm = new FormGroup({ links: new FormArray<LinkType>([]) });
  userDetails?: Omit<UserDetails, 'links'>;

  constructor(
    private toastService: ToastService,
    private devLinksService: DevLinksService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      const { links, ...rest } = user as UserDetails;
      if (links.length > 0) {
        this.linksArray.clear();
        links.forEach((link) => {
          this.linksArray.push(this.newGroup(link.platform, link.url));
        });
      }
      this.userDetails = rest;
    });
  }

  get linksArray() {
    return this.linksForm.get('links') as FormArray<LinkType>;
  }

  get user() {
    const user = {
      ...this.userDetails,
      ...this.linksForm.value,
    } as UserDetails;
    return user;
  }

  newGroup(platformInit: string = '', urlInit: string = '') {
    const platform = new FormControl(platformInit, [
      Validators.required,
      this.checkPlatformExists(),
      this.checkPlatformIsInList(),
    ]);
    const url = new FormControl(urlInit, [
      Validators.required,
      this.checkUrl(),
    ]);
    return new FormGroup({
      platform,
      url,
    });
  }

  getUnselectedPlatforms() {
    const allPlatforms = this.devLinksService.devLinks.map(
      (link) => link.displayName
    );
    const existingPlatforms = this.linksArray.value.map(
      (link) => link.platform
    );
    const filteredPlatforms = allPlatforms.filter(
      (platform) => !existingPlatforms.includes(platform)
    );
    return filteredPlatforms;
  }

  changePlatform(index: number, platform: string) {
    this.linksArray.at(index).patchValue({ platform });
  }

  // TODO update pattern check
  checkUrl(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const urlPatternMatch = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(
        control.value
      );
      // &&
      // control.value.startsWith(
      //   this.devLinksService.devLinks.find(
      //     (link) => control.value === link.displayName
      //   )?.urlPattern
      // );
      if (!urlPatternMatch) {
        return { url: true };
      }
      return null;
    };
  }
  // FIXME fix this
  checkPlatformExists(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const existingPlatforms = this.linksArray
        ? this.linksArray.value.map((link) => link.platform)
        : [];
      const itExists = existingPlatforms.filter(
        (val) => val === control.value
      ).length;
      if (itExists > 1) {
        return { platformExists: true };
      }
      return null;
    };
  }
  checkPlatformIsInList(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const allPlatforms = this.devLinksService.devLinks.map(
        (link) => link.displayName
      );
      if (!allPlatforms.includes(control.value)) {
        return { platformNotInList: true };
      }
      return null;
    };
  }
  addLink() {
    if (this.linksArray.length >= this.devLinksService.devLinks.length) {
      this.toastService.toastHandler('Maximum links entered!', 'error');
      return;
    }
    const unselectedPlatforms = this.getUnselectedPlatforms();
    this.linksArray.push(this.newGroup(unselectedPlatforms[0]));
  }
  removeLink(linkIndex: number) {
    this.linksArray.removeAt(linkIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    let newIndex: number = event.currentIndex;
    let previousIndex: number = event.previousIndex;

    const prevGroup = { ...this.linksArray.at(newIndex) };
    const newGroup = { ...this.linksArray.at(previousIndex) };
    this.linksArray.at(newIndex).patchValue(newGroup.value);
    this.linksArray.at(previousIndex).patchValue(prevGroup.value);
  }

  save() {
    if (this.userDetails?.id) {
      this.userService.updateUser(
        this.userDetails.id,
        this.linksForm.value as any
      );
      this.userService.user$.next({
        ...this.userDetails,
        ...(this.linksForm.value as any),
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
