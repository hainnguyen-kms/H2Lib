import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import { HeaderSettings } from '../interface/header.interface';

@Component({
  selector: 'h2-library-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() settings: HeaderSettings;
  @Output() logoutEvent = new EventEmitter<string>();
  headerTemplateRef: TemplateRef<any>;
  avatarDropdownTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }
  logout() {
    this.logoutEvent.emit();
  }
  toggleSidebar() {
    const navDom: any = document.querySelector('.sidebar.navbar-nav');
    const bodyDom: any = document.querySelector('body');
    navDom.classList.toggle('toggled');
    bodyDom.classList.toggle('sidebar-toggled');
  }
  setHeaderTemplateRef(ref: TemplateRef<any>) {
    this.headerTemplateRef = ref;
  }
  setAvatarDropdownTemplateRef(ref: TemplateRef<any>) {
    this.avatarDropdownTemplate = ref;
  }
}
