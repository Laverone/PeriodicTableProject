import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;
  authentificationService: any;

  ngOnInit() {
  }

  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value);
    const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
    this.authentificationService.authenticate(SignInData);
  }

}
