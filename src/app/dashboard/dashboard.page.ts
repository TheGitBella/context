import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {

  constructor(
      private router: Router
  ) {}

  onFirstButtonClick() {
    this.router.navigate(['/tex'])
        .then(nav => {
          return;
        }, err => {
          console.error(err);
        });
  }
  onSecondButtonClick() {
    this.router.navigate(['/tex'])
        .then(nav => {
          return;
        }, err => {
          console.error(err);
        });
  }

}
