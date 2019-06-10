import {Directive, TemplateRef} from '@angular/core';
import {HeaderComponent} from './header.component';

@Directive({
  selector: '[appHeaderAvatar]'
})
export class HeaderAvatarDirective {

  constructor(templateRef: TemplateRef<any>, header: HeaderComponent) {
    header.setAvatarDropdownTemplateRef(templateRef);
  }
}
