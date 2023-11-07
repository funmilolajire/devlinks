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

  constructor(
    private toastService: ToastService,
    private devLinksService: DevLinksService
  ) {}

  ngOnInit(): void {
    this.addLink();
  }

  get user() {
    return null;
  }

  get allLinks() {
    return this.devLinksService.devLinks;
  }

  get linksArray() {
    return this.linksForm.get('links') as FormArray<LinkType>;
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
    const platform = new FormControl(unselectedPlatforms[0], [
      Validators.required,
      this.checkPlatformExists(),
      this.checkPlatformIsInList(),
    ]);
    const url = new FormControl('', [Validators.required, this.checkUrl()]);
    const newLinkGroup = new FormGroup({
      platform,
      url,
    });
    this.linksArray.push(newLinkGroup);
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
    console.log(this.linksForm.value);
    this.toastService.toastHandler(
      'Your changes have been successfully saved!',
      'save'
    );
  }
}
