import { inject, Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// to jest STATELESS service
// nie przechowuje żadnego stanu danych.

@Injectable({
  providedIn: 'root',
})
export class AuctionsResourceService {
  // call to ajax!

  private readonly apiURL = environment.baseApiURL + '/auctions';
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.apiURL);
  }

  addOne(auction: Omit<AuctionItem, 'id'>) {
    return this.httpClient.post<AuctionItem>(this.apiURL, auction);
  }
}
