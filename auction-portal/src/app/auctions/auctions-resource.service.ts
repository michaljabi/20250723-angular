import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root',
})
export class AuctionsResourceService {
  // call to ajax!

  getAll() {
    return [{ name: '1' }, {}, {}];
  }

  addOne(auction: AuctionItem) {}
}
