import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userStatus: string;
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    /* This is a temporary fix. There has to be a better way than
    this crap code!*/
    /*this.userStatus = localStorage.getItem("user");
    if (localStorage.getItem("user") != "null") {
      this.isLoggedIn = true;
    } else if(localStorage.getItem("user") === "null") {
      this.isLoggedIn = false;
    }
    console.log("User Status " + this.userStatus);*/
  }

  logOut() {
    this.authService.logOut();
  }

  isShown:boolean=false;

}
