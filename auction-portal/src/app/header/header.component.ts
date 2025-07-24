import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="mb-2 p-5 bg-warning" (click)="handleClick()">
      <h1>{{ appTitle() }} {{ exclamation() }}</h1>
      <h4>{{ 560 + 2 + 3000 }}</h4>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  appTitle = input('Auction protal');

  titleText = 'Auction portal';

  exclamation = signal('!');

  /** spoiler przed sygnałami - co się dzieje:
   * 
  constructor() {
    // ustalenie wartości:
    this.exclamation.set('?');
    // aktualizacja wartości
    this.exclamation.update((v) => v + '!');
  }
  */

  handleClick() {
    // dostęp do zmiennych globalnych (window, document) w JS
    console.log(window);
  }
}
