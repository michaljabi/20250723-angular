import { Component, inject } from '@angular/core';
import { AuctionsResourceService } from './auctions-resource.service';
import { JsonPipe } from '@angular/common';

@Component({
  // ponieważ nie ma selectora, pokazujemy innym że to ma być komponent w całości
  // zarządzany przez Router!
  imports: [JsonPipe],
  template: `
    <div>
      <h2>Lista aukcji</h2>
      <div>{{ auctions | json }}</div>
    </div>
  `,
  styles: ``,
  // providers: [AuctionsResourceService],
})
export class AuctionsPageComponent {
  
  auctionResourceService = inject(AuctionsResourceService);

  auctions = this.auctionResourceService.getAll();
  
}
