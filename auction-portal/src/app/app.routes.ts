import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';

export const routes: Routes = [
  { path: 'auctions', component: AuctionsPageComponent },
  // TODO: pokaż absolutne /aucitons!
  // { path: 'hello/world/of/tanks', component: AuctionsPageComponent },
];
