import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="mb-2 p-5 bg-warning" (click)="handleClick()">
      <h1>{{ appTitle() }} {{ exclamation() }}</h1>
      <h4>{{ 560 + 2 + 3000 }}</h4>
      @if(user()) {
      <div>
        User <strong>{{ user()?.name }}</strong> is logged in!

        <!--  $event.stopPropagation() poniżej spowoduje że nie wywołamy (click) na elemencie <header> powyżej (ponieważ eventy w DOM w przeglądarce domyślie "bubble"ują w górę!) -->
        <button
          class="btn btn-danger"
          (click)="logOut.emit(1); $event.stopPropagation()"
        >
          Log out
        </button>
      </div>
      }
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  //auctionResourceService = inject(AuctionsResourceService);

  appTitle = input('Auction protal');
  user = input<{ name: string; lastName?: string }>();

  // logout nie musi NIC emitować output() - ale tutaj poglądowo $event pokazanez przesłaniem number'a
  logOut = output<number>();

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
