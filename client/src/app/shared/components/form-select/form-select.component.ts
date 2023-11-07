import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewContainerRef,
  AfterViewInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { DevLinksService } from '../../services/dev-links.service';
import { Portal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
})
export class FormSelectComponent implements AfterViewInit {
  @Input() label = '';
  @Input() for = '';
  @Input() error = '';
  @Input() selectedPlatform = '';
  @Output() changePlatform = new EventEmitter<string>();

  @ViewChild('templatePortalContent')
  templatePortalContent?: TemplateRef<unknown>;

  portalOutlet?: Portal<any>;
  templatePortal?: TemplatePortal<any>;

  constructor(
    private devlinksService: DevLinksService,
    private _viewContainerRef: ViewContainerRef
  ) {}
  ngAfterViewInit(): void {
    this.templatePortal =
      this.templatePortalContent &&
      new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
  }
  get allPlatforms() {
    return this.devlinksService.devLinks.filter(
      (link) =>
        link.displayName
          .toLowerCase()
          .includes(this.selectedPlatform.toLowerCase()) ||
        link.id.includes(this.selectedPlatform.toLowerCase())
    );
  }
  get platformId() {
    return this.devlinksService.getPlatformId(this.selectedPlatform || '');
  }

  closeDropdown() {
    this.portalOutlet = undefined;
  }

  handleDropdown() {
    this.portalOutlet = this.templatePortal;
  }

  platformHandler(platform: string) {
    this.changePlatform.emit(platform);
    this.closeDropdown();
  }
}
