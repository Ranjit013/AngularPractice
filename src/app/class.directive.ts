import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  @Input('appClass') classnames: string | undefined;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = this.classnames;
  }

}
