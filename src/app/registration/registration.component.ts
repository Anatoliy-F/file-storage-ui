import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { UserRegistration } from './userRegistration';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
  }

  // public validateControl = (controlName: string) => {
  //   return this.registerForm.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched
  // }

  // public hasError = (controlName: string, errorName: string) => {
  //   return this.registerForm.get(controlName)?.hasError(errorName)
  // }

  // public registerUser = (registerFormValue: FormData) => {
  //   const formValues = {...registerFormValue};
  //   const user: userRegistration = {
  //     name: formValues.name,
  //     email: formValues.email,
  //     password: formValues.password,
  //     confirmpassword: formValues.confirmPassword
  //   };
  // }

  
}
