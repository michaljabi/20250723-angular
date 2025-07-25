import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { PromotionsPageComponent } from './auctions/promotions-page.component';
import { AdvicePageComponent } from './advice/advice-page/advice-page.component';
import { AdviceDetailsComponent } from './advice/advice-page/advice-details.component';

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
];
