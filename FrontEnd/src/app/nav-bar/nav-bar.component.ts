import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userLogged: string;
  constructor(private router:Router,
              private alertService:AlertService) { }

  ngOnInit() {
  }

  loggedin(){
    this.userLogged=localStorage.getItem('token');
     return this.userLogged;
    }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['user/login']);
    this.alertService.success('You are logged out !');
  }
}
