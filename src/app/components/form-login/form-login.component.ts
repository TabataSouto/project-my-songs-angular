import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ILogin } from 'src/app/interfaces/ILogin';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<ILogin>();

  loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  get username() {
    return this.loginForm.get('username')!;
  }

  submit() {
    if (this.loginForm.invalid) return;
    this.onSubmit.emit(this.loginForm.value);
  }

}
