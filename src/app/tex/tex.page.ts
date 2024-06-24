import { Component } from '@angular/core';
import { OpenaiServerService } from '../service/openai.service';

@Component({
    selector: 'app-tex',
    templateUrl: 'tex.page.html',
    styleUrls: ['tex.page.scss'],
})
export class TexPage {
    messageToSend: string = '';
    messages: { text: string, type: 'sent' | 'received', time: string }[] = [];

    constructor(
        private openaiServerService: OpenaiServerService
    ) {}

    sendMessage() {
        if (this.messageToSend.trim() === '') {
            return;
        }

        const currentTime = new Date().toLocaleTimeString();

        this.messages.push({
            text: this.messageToSend,
            type: 'sent',
            time: currentTime
        });

        this.openaiServerService.sendMessage(this.messageToSend).subscribe(
            response => {
                this.messages.push({
                    text: response.response,
                    type: 'received',
                    time: new Date().toLocaleTimeString()
                });
                this.messageToSend = '';
            },
            error => {
                console.error('Erro ao enviar mensagem para o servidor:', error);
            }
        );
    }
}
