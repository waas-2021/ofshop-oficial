import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) {
    if(!this.loggedIn()) {
      /*this.router.navigate(['inicio']);
    } else {*/
      this.router.navigate(['login']);
    }
  }
  
  title = 'ofshop';

  loggedIn(){
    return localStorage.getItem('token');
  }

  logout(){
    alert("Logged out");
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
