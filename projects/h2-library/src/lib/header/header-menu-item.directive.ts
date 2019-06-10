import {Directive, TemplateRef} from '@angular/core';
import { HeaderComponent } from './header.component';
@Directive({
  selector: '[appHeaderItem]'
})
export class HeaderMenuItemDirective {

  constructor(templateRef: TemplateRef<any>, header: HeaderComponent) {
    header.setHeaderTemplateRef(templateRef);
  }

}
