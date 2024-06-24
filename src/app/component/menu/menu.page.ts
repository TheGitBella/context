import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.page.html',
    styleUrls: ['menu.page.scss'],
})
export class MenuPage {
    buttons: { text: string, action: () => void, icon?: string }[] = [
        { text: 'TEX', action: () => this.navigateTo('/tex'), icon: './assets/images/tex.jpg' },
        { text: 'HOME', action: () => this.navigateTo('/dashboard') },
        { text: 'PERFIL', action: () => this.navigateTo('/profile') },
        { text: 'PAGAMENTO', action: () => this.navigateTo('/payment') },
        { text: 'CADASTRAR NOVO CONTATO', action: () => this.navigateTo('/new-contact') },
        { text: 'CONTATO', action: () => this.navigateTo('/contact') },
        { text: 'RELATÓRIO', action: () => this.navigateTo('/report') },
        { text: 'REGISTRAR HUMOR', action: () => this.navigateTo('/mood') },
        { text: 'GADGETS', action: () => this.navigateTo('/gadgets') },
        { text: 'LOGOUT', action: () => this.navigateTo('') },
    ];
    constructor(
        private router: Router
    ) {}

    navigateTo(route: string) {
        this.router.navigate([route])
            .then(nav => {
                return;
            }, err => {
                console.error(err);
            });
    }

}
