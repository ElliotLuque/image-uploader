import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ViewRef]'
})
export class ViewRefDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
