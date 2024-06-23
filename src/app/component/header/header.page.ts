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
    @Input() hasMenuButton: boolean = false;
    @Input() hasLogo: boolean = false;

    constructor(
        private location: Location
    ) {}

    backToLastPage() {
        this.location.back()
    }

}
