import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  @Output('clickOutside') clickOutside = new EventEmitter<MouseEvent>();

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  @HostListener('document:click', ['$event', '$event.target'])
  handleOutsideClick(event: MouseEvent, targetElement: HTMLElement) {
    const clickedInside =
      this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
