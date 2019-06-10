import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appSidebarMenuItem]'
})
export class SidebarMenuItemDirective {
  constructor(public templateRef: TemplateRef<any>) {

  }
}
