import { Component, input } from '@angular/core';
import { AuctionItem } from '../auction-item';

@Component({
  selector: 'app-auction-card',
  imports: [],
  template: `
    <div class="card">
      @let a = auction();
      <div class="card-header">{{ a.title }}</div>
      <img class="card-img" [src]="a.imgUrl" [alt]="a.title" />
      <div class="card-body">
        <p class="card-text">{{ a?.description }}</p>
        <div class="d-flex justify-content-between align-content-center">
          <strong> {{ a.price }} zł</strong>
          <button class="btn btn-primary">
            <i class="fa fa-cart-plus"></i> +
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AuctionCardComponent {
  // props (input)
  auction = input.required<AuctionItem>();
}
