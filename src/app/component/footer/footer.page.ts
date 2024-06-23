import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.page.html',
    styleUrls: ['footer.page.scss'],
})
export class FooterPage {
    @Input() isExpanded: boolean = false;
    @Input() hasReturnButton: boolean = false;
    @Input() hasAvatar: boolean = false;
    @Input() hasMenuButton: boolean = false;
    @Input() hasLogo: boolean = false;
    isMenuExpanded: boolean = false;

    constructor(private location: Location) {}

    backToLastPage() {
        this.location.back();
    }

    toggleMenu() {
        this.isMenuExpanded = !this.isMenuExpanded;
    }
}
