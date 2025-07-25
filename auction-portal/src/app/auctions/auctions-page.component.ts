import { Component, inject, OnInit } from '@angular/core';
import { AuctionsResourceService } from './auctions-resource.service';
import { JsonPipe } from '@angular/common';
import { AuctionItem } from './auction-item';
// import { finalize } from 'rxjs';

@Component({
  // ponieważ nie ma selectora, pokazujemy innym że to ma być komponent w całości
  // zarządzany przez Router!
  imports: [JsonPipe],
  template: `
    <div>
      <h2>Lista aukcji</h2>
      <div class="row">
        @for(auction of auctions; track auction.id) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <!-- TODO: dodaj wyświetlanie aukcji (komponent) -->
          {{ auction | json }}
        </div>
        } @empty { @if(isLoading) {
        <div class="alert alert-info">Ładuje aukcje...</div>
        } @if(errorMessage) {
        <div class="alert alert-danger">{{ errorMessage }}</div>
        } }
      </div>
    </div>
  `,
  styles: ``,
  // providers: [AuctionsResourceService],
})
export class AuctionsPageComponent implements OnInit {
  auctionResourceService = inject(AuctionsResourceService);

  auctions: AuctionItem[] = []; //this.auctionResourceService.getAll();
  isLoading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.isLoading = true;
    // consumer:
    this.auctionResourceService.getAll().subscribe({
      next: (auctions: AuctionItem[]) => {
        this.auctions = auctions;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Nie udało się pobrać aukcji';
        this.isLoading = false;
        console.log(err);
      },
    });
  }
}
