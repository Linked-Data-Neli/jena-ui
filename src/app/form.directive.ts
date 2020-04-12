import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[form-directive]'
})
export class FormDirective {
  constructor(public viewContainerRef: ViewContainerRef){}
}
