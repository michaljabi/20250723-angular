import { Component, inject, OnInit } from '@angular/core';
import { AuctionsResourceService } from './auctions-resource.service';
import { JsonPipe } from '@angular/common';
import { AuctionItem } from './auction-item';

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
export class AuctionsPageComponent implements OnInit {
  auctionResourceService = inject(AuctionsResourceService);

  auctions: AuctionItem[] = []; //this.auctionResourceService.getAll();

  ngOnInit(): void {
    this.auctionResourceService.getAll().subscribe({
      next: (auctions: AuctionItem[]) => {
        this.auctions = auctions;
      },
      error: () => {},
    });
  }
}
