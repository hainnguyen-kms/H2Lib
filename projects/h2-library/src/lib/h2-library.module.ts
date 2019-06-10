import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { HeaderMenuItemDirective } from './header/header-menu-item.directive';
import { HeaderAvatarDirective } from './header/header-avatar.directive';
import { SidebarMenuItemDirective } from './sidebar/sidebar-menu-item.directive';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, LoginComponent,
    HeaderMenuItemDirective, HeaderAvatarDirective, HeaderAvatarDirective, SidebarMenuItemDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, LoginComponent, HeaderMenuItemDirective,
    HeaderAvatarDirective, SidebarMenuItemDirective]
})
export class H2LibraryModule { }
