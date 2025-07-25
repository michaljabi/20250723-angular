import { inject, Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// to jest STATELESS service
// nie przechowuje żadnego stanu danych.

@Injectable({
  providedIn: 'root',
})
export class AuctionsResourceService {
  // call to ajax!

  private readonly apiURL = 'http://localhost:3000/auctions'; // TODO: (ng g environments)
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.apiURL);
  }

  addOne(auction: Omit<AuctionItem, 'id'>) {
    return this.httpClient.post<AuctionItem>(this.apiURL, auction);
  }
}
