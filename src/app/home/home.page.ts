import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
      private router: Router
  ) {}

  onLoginButtonClick() {
    this.router.navigate(['/login'])
        .then(nav => {
          return;
        }, err => {
          console.error(err);
        });
  }
    onRegisterButtonClick() {
    this.router.navigate(['/register'])
        .then(nav => {
          return;
        }, err => {
          console.error(err);
        });
  }

}
