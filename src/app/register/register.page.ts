import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  constructor(private router: Router) {}

  onRegisterButtonClick() {
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
