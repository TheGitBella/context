import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: 'header.page.html',
    styleUrls: ['header.page.scss'],
})
export class HeaderPage {
    @Input() hasReturnButton: boolean = false;
    @Input() hasAvatar: boolean = false;
    @Input() hasMenuButton: boolean = true;
    @Input() hasLogo: boolean = false;
    @Input() isMenuExpanded: boolean = false;

    constructor(private location: Location) {}

    ngOnInit() {}

    backToLastPage() {
        this.location.back();
    }

    toggleMenu() {
        this.isMenuExpanded = !this.isMenuExpanded;
    }
}
