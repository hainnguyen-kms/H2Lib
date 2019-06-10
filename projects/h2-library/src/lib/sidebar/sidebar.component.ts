import {Component, ContentChildren, Input, AfterContentInit, QueryList, TemplateRef} from '@angular/core';
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
  @ContentChildren(SidebarMenuItemDirective) contentChildren: QueryList<SidebarMenuItemDirective>;
  sidebarMenuItemTemplate: TemplateRef<any>;

  ngAfterContentInit() {
    // set first sidebarMenu template defined by user to menu
    if (this.contentChildren.first) {
      this.sidebarMenuItemTemplate = this.contentChildren.first.templateRef;
    }
  }
}
