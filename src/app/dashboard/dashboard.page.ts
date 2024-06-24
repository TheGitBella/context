import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {
    siteTitle: string = 'COMO OS EXERCÍCIOS FÍSICOS AJUDAM NA SAÚDE MENTAL?';
    siteContent: string = 'Não é segredo para ninguém que a prática regular de exercícios físicos traz uma série de benefícios para o organismo. O háb...';

    btns = [
        { label: 'Contato' },
        { label: 'Gadgets' },
        { label: 'Registro' },
        { label: 'Relatórios' },
        { label: 'Configuração' },
        { label: 'Logout' },
    ];
  constructor () {}

}
