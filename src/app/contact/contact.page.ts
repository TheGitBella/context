import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
})
export class ContactPage {
  constructor(private router: Router) {}

  onNewContactButtonClick() {
    this.router.navigate(['/new-contact']).then(
      (nav) => {
        return;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
