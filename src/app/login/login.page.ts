import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  onLoginButtonClick() {
    this.router.navigate(['/dashboard'])
        .then(nav => {
          return;
        }, err => {
          console.error(err);
        });
  }

  onHomeButtonClick() {
    this.router.navigate(['/']).then(
      (nav) => {
        return;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
