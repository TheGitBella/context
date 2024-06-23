import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: 'header.page.html',
    styleUrls: ['header.page.scss'],
})
export class HeaderPage {
    @Input() isExpanded: boolean = false;
    @Input() hasReturnButton: boolean = false;
    @Input() hasAvatar: boolean = false;
    @Input() hasMenuButton: boolean = true;
    @Input() hasLogo: boolean = false;
    isMenuExpanded: boolean = false;
    isPageExpanded: boolean = false;

    constructor(private location: Location) {}

    backToLastPage() {
        this.location.back();
    }

    toggleMenu() {
        if(!this.isMenuExpanded && !this.isExpanded) {
            this.isPageExpanded = true
        } if(!this.isPageExpanded) {
            this.isExpanded = !this.isExpanded;
        }

        this.isMenuExpanded = !this.isMenuExpanded;
    }
}
