import {Component, OnInit} from '@angular/core';
import {User} from '../entities/User';
import {Subscription} from 'rxjs';
import {LoginComponentService} from './login.component.servicez';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public userLogin: User;
  public subscription: Subscription;
  public failToLoggedIn = false;
  public errorMessage = '';

  public existsUser = false;

  public constructor(private loginService: LoginComponentService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }

  onSubmit() {
    this.userLogin = new User(null, this.loginForm.get('username').value, this.loginForm.get('password').value);
    console.log(this.userLogin.username);
    console.log(this.userLogin.password);
    localStorage.setItem('username', this.userLogin.username);
    console.log('setat');
    console.log(localStorage.getItem('username'));

  }

  redirectFirstPage() {
    this.router.navigate(['/user']);
  }

  onLogin() {
    this.userLogin = new User(null, this.loginForm.get('username').value, this.loginForm.get('password').value);
    console.log(this.userLogin.username);
    console.log(this.userLogin.password);
    localStorage.setItem('username', this.userLogin.username);
    console.log('setat');
    console.log(localStorage.getItem('username'));

    this.loginService.logIn(this.userLogin).subscribe(value => {
        this.redirectFirstPage();
      }, error1 => {
        alert('Username or password incorrect');
      }
    );
  }

  redirectRegister() {
    this.router.navigate(['/register']);
  }
}
