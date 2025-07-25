import { CommonModule /*, NgClass */ } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-main-menu',
  // zamiast CommonModule (zawierający wiele dodatkowych dyrektyw np. ngStyle)
  // można tylko zaimportować NgClass bo tytlko to używamy na widoku
  imports: [CommonModule, RouterLink, SharedModule /* NgClass */],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <!-- <button
        class="navbar-toggler"
        type="button"
        [style]="{ backgroundColor: color }"
        (click)="handleToggleMenu()"
      > -->
      <button
        class="navbar-toggler"
        type="button"
        [style]="{ backgroundColor: color }"
        (click)="isMenuShown = !isMenuShown"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Można prościej (bez dyrektywy!) <div class="collapse navbar-collapse" [class.show]="isMenuShown"> -->
      <div class="collapse navbar-collapse" [ngClass]="{ show: isMenuShown }">
        <ul class="navbar-nav">
          @for(item of menuItems; track item.href) {
          <li class="nav-item">
            <a class="nav-link" [routerLink]="item.href">{{ item.title }}</a>
          </li>
          }
        </ul>
      </div>
      <div class="text-light d-flex gap-2">
        <a class="btn btn-outline-primary" routerLink="/add-auction">
          <fa-icon icon="plus"></fa-icon> Dodaj
        </a>
        <a class="btn btn-outline-secondary" routerLink="/cart">
          <fa-icon icon="shopping-basket"></fa-icon> Koszyk
        </a>
      </div>
    </nav>
  `,
  styles: ``,
})
export class MainMenuComponent implements OnInit, AfterViewInit {
  isMenuShown = true;
  color = 'transparent';

  menuItems: MenuItem[] = [
    // bez slasha, jak jesteśmy na ścieżce: http://localhost:4200/hello/world/of/tanks
    // http://localhost:4200/hello/world/of/tanks/auctions
    // a ze slashem, będzie i tak absolutnie!
    // http://localhost:4200/auctions
    { href: '/auctions', title: 'Aukcje' },
    { href: '/promotions', title: 'Promocje' },
  ];

  // dodatkowa metoda (alternatywa)
  handleToggleMenu() {
    this.isMenuShown = !this.isMenuShown;
  }

  // coding style, że nazywasz coś co pochodzi z event z przedrostkiem `handle*(event)`
  // handleToggleMenu()

  ngOnInit(): void {
    console.log('MainMenuComponent instance created!');
    setTimeout(() => {
      this.menuItems.push({ href: '/advices', title: 'Podpowiadamy' });
    }, 3000);
  }

  ngAfterViewInit(): void {
    console.log('MainMenuComponent mounted on DOM!');
    // this.randomNumberEverySecond();
  }

  number = 0;
  randomNumberEverySecond() {
    setInterval(() => {
      this.number = Math.random();
      // TODO: wróć żeby pokazać ngOnDestroy! bo jest tutaj ważne...
    }, 1000);
  }
}
