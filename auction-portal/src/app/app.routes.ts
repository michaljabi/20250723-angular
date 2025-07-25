import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { PromotionsPageComponent } from './auctions/promotions-page.component';
import { AdvicePageComponent } from './advice/advice-page/advice-page.component';
import { AdviceDetailsComponent } from './advice/advice-page/advice-details.component';
import { AddAuctionPageComponent } from './auctions/add-auction-page/add-auction-page.component';
import { CartPageComponent } from './auctions/cart-page/cart-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
  // TODO: pokaż absolutne /aucitons! (child routing)
  // { path: 'hello/world/of/tanks', component: AuctionsPageComponent },
  {
    path: 'advices',
    component: AdvicePageComponent,
    children: [
      { path: '', component: AdviceDetailsComponent, pathMatch: 'full' },
      { path: ':majId', component: AdviceDetailsComponent },
      {
        path: ':majId/:supperPath/:sample',
        component: AdviceDetailsComponent,
      },
    ],
  },
  { path: 'add-auction', component: AddAuctionPageComponent },
  { path: 'cart', component: CartPageComponent },
];
