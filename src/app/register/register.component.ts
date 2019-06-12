import {Component, OnInit} from '@angular/core';
import {RegisterComponentService} from './register.component.services';
import {RegisterUser} from '../entities/RegisterUser';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {resetComponentState} from '@angular/core/src/render3/state';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {

  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public carNumber: string;
  public subscription: Subscription;

  public confirmPassord: string;
  user2: RegisterUser;
  registerUserFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterComponentService, private router: Router) {
  }

  ngOnInit() {

  }

  getUser() {
    this.user2 = this.createRegister();
    console.log('username', this.user2.username);
    console.log('firstName', this.user2.firstName);
    console.log('lastName', this.user2.lastName);
    console.log('password', this.user2.password);
    console.log('Cpassword', this.confirmPassord);
    console.log('email', this.user2.email);
    console.log('phone', this.user2.phone);
    console.log('carNb', this.user2.carNumber);


    this.registerService.register(this.user2).subscribe(value => {
        this.redirectRegister();
        alert('The user was registered!');
        //
        // console.log(this.user2);
      }, error1 => {
        alert('The user or car number is already registered!');
      }
    );
  }

  redirectRegister() {
    this.router.navigate(['/login']);
  }

  createRegister(): RegisterUser {
    return {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      carNumber: this.carNumber
    };
  }

  resetForm() {
    this.registerUserFormGroup.reset();
  }

}
