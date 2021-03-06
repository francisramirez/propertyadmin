import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertService:AlertService,
              private router: Router) { }

  ngOnInit() {
  }
  onLogin(loginForm:NgForm){

    const token = this.authService.authUser(loginForm.value);

    if (token) {

      localStorage.setItem('token',token.userName);
      this.router.navigate(['/']);
    }
    else{
      this.alertService.error('user or password are wrong.');
    }

  }

}
