import { Component, inject, OnInit } from '@angular/core';
import { AuctionsResourceService } from './auctions-resource.service';
import { AuctionItem } from './auction-item';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { SharedModule } from '../shared/shared.module';
// import { finalize } from 'rxjs';

@Component({
  // ponieważ nie ma selectora, pokazujemy innym że to ma być komponent w całości
  // zarządzany przez Router!
  imports: [AuctionCardComponent, SharedModule],
  template: `
    <div>
      <h2>Lista aukcji ({{ noOfAuctions }})</h2>
      <app-search-bar (search)="handleSearchFor($event)" />
      <div class="row gap-4">
        @for(auction of filteredAuctions; track auction.id) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <app-auction-card [auction]="auction" />
        </div>
        } @empty { @if(isLoading) {
        <app-notification> Ładuje <strong>aukcje</strong>... </app-notification>
        } @if(errorMessage) {
        <app-notification type="danger"> {{ errorMessage }} </app-notification>
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
  searchText = '';
  // noOfAuctions = 0; // nie imperatywnie,
  // tylko chcemy wyliczyc na bazie innych danych

  handleSearchFor(value: string) {
    this.searchText = value.toLowerCase();
  }

  get filteredAuctions() {
    return this.auctions.filter((a) =>
      a.title.toLowerCase().includes(this.searchText)
    );
  }

  get noOfAuctions() {
    return this.filteredAuctions.length;
  }

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
