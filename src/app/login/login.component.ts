import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  loginMeta = {
    registerUrl: '/register',
    forgotUrl: '/forgot'
  };

  ngOnInit() {
  }
  login(a) {
    if (window.confirm(JSON.stringify(a))) {
      localStorage.setItem('isLoggedin', 'true');
      this.router.navigate(['/']);
    }
  }
}
