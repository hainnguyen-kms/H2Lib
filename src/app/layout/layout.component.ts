import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  headerSettings = {
    logoUrl: '/favicon.ico',
    pageTitle: 'VinApp',
    menus: [
      {
        link: '/login',
        title: 'Booking',
        icon: 'fa-calendar-alt',
      },
      {
        title: 'Services',
        icon: 'fa-compass',
        subMenus: [
          {
            link: '/huhu',
            title: 'Payments',
            icon: 'fa-user',
          },
          {
            link: '/huhu2',
            title: 'Shopping',
            icon: 'fa-shopping-cart',
          },
        ]
      }
    ],
    user: {
      userName: 'Hai',
      profileImage: '/assets/user.png',
    }
  };
  sidebarConfig = {
    menus: [
      {
        link: '/login',
        title: 'Booking',
        icon: 'fa-calendar-alt',
      },
      {
        title: 'Services',
        icon: 'fa-compass',
        subMenus: [
          {
            link: '/huhu',
            title: 'Payments',
            icon: 'fa-user',
          },
        ]
      }
    ],
  };
  logout() {
    if (window.confirm('Are you sure to logout ?')) {
      localStorage.removeItem('isLoggedin');
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }
}
