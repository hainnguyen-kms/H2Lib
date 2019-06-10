import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginMeta } from '../interface/login.interface';

@Component({
  selector: 'h2-library-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() loginEvent = new EventEmitter();
  @Input() meta: LoginMeta;
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    isRemember: [false],
  });
  constructor(private fb: FormBuilder) { }

  login(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.loginEvent.emit(value);
    }
  }

}
