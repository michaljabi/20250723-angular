import { Component } from '@angular/core';

@Component({
  // ponieważ nie ma selectora, pokazujemy innym że to ma być komponent w całości
  // zarządzany przez Router!
  imports: [],
  template: ` <p>auctions-page works!</p> `,
  styles: ``,
})
export class AuctionsPageComponent {}
