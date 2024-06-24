import { Component } from '@angular/core';

interface Mood {
  label: string;
  image: string;
}

@Component({
  selector: 'app-mood',
  templateUrl: 'mood.page.html',
  styleUrls: ['mood.page.scss'],
})
export class MoodPage {
  moods: Mood[] = [
    { label: 'Apaixonado', image: './assets/images/apaixonado.svg' },
    { label: 'Calmo', image: './assets/images/calmo.svg' },
    { label: 'Confiante', image: './assets/images/confiante.svg' },
    { label: 'Confuso', image: './assets/images/confuso.svg' },
    { label: 'Decepcionado', image: './assets/images/decepcionado.svg' },
    { label: 'Feliz', image: './assets/images/feliz.svg' },
    { label: 'Grato', image: './assets/images/grato.svg' },
    { label: 'Raivoso', image: './assets/images/raivoso.svg' },
    { label: 'Triste', image: './assets/images/triste.svg' },
  ];

  selectedMood: Mood | null = null;

  selectMood(mood: Mood) {
    this.selectedMood = mood;
  }
}
