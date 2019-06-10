import {Component, Input, AfterContentInit, TemplateRef, ContentChild} from '@angular/core';
import {SidebarSettings} from '../interface/sidebar.interface';
import { SidebarMenuItemDirective } from './sidebar-menu-item.directive';

@Component({
  selector: 'h2-library-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterContentInit {
  @Input() config: SidebarSettings;

  // query if there is any sidebar directive provided
  @ContentChild(SidebarMenuItemDirective) contentChildren: SidebarMenuItemDirective;
  sidebarMenuItemTemplate: TemplateRef<any>;

  ngAfterContentInit() {
    // set sidebarMenu template defined by user to menu
    if (this.contentChildren) {
      this.sidebarMenuItemTemplate = this.contentChildren.templateRef;
    }
  }
}
