import { Component, input, output } from '@angular/core';
import { AuctionItem } from '../auction-item';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-auction-card',
  imports: [SharedModule],
  template: `
    <div class="card">
      @let a = auction();
      <div class="card-header">{{ a.title }}</div>
      <img class="card-img" [src]="a.imgUrl" [alt]="a.title" />
      <div class="card-body">
        <p class="card-text">{{ a?.description }}</p>
        <div class="d-flex justify-content-between align-content-center">
          <strong> {{ a.price }} zł</strong>
          <button class="btn btn-primary" (click)="addToCart.emit(a)">
            <fa-icon icon="cart-plus"></fa-icon>
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
  addToCart = output<AuctionItem>();

  // tzw. dummy component - nie wie skąd pochodzą dane i nie wie kto (o ile ktoś) je odbiera
}
