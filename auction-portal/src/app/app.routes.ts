import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { PromotionsPageComponent } from './auctions/promotions-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
  // TODO: pokaż absolutne /aucitons! (child routing)
  // { path: 'hello/world/of/tanks', component: AuctionsPageComponent },
];
