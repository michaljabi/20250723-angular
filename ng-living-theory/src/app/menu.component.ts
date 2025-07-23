import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  template: `
    <nav class="menu column">
      <p class="menu-label">Część A - <strong>Podstawy</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/sample"> Przykład wygenerowanego komponentu </a>
        </li>
        <li>
          <a routerLink="/data-binding"> Bindowanie danych </a>
        </li>
        <li>
          <a routerLink="/hermetic-style"> Hermetyczność stylu </a>
        </li>
        <li>
          <a routerLink="/basic-directives"> Dyrektywy w template </a>
        </li>
        <li>
          <a routerLink="/for-of-loop"> Pętla For-Of w template </a>
        </li>
        <li>
          <a routerLink="/methods"> Metody </a>
        </li>
      </ul>
      <p class="menu-label">Część B - <strong>Komunikacja</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/parent-child"> Relacja parent - child </a>
        </li>
        <li>
          <a routerLink="/long-distance"> Daleka odległość... </a>
        </li>
        <li>
          <a routerLink="/server-side"> Dane z serwera API</a>
        </li>
      </ul>
      <p class="menu-label">Część C - <strong>Pipes i refs</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/pipes"> Pipes na template </a>
        </li>
      </ul>
      <ul class="menu-list">
        <li>
          <a routerLink="/template-ref"> Ref na widoku </a>
        </li>
      </ul>
      <ul class="menu-list">
        <li>
          <a routerLink="/template-ref-in-logic"> Ref w logice komponentu </a>
        </li>
      </ul>
      <p class="menu-label">Część D - <strong>Formularze</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/forms"> Template driven forms </a>
        </li>
        <li>
          <a routerLink="/reactive-forms"> Reactive driven forms </a>
        </li>
      </ul>
      <p class="menu-label">Część E - <strong>Cykl życia</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/lifecycle"> Metody lifecycle</a>
        </li>
      </ul>
      <p class="menu-label">Część F - <strong>Testowanie</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/to-test"> Komponent poddany testom (podgląd)</a>
        </li>
      </ul>
      <p class="menu-label">Część G [dodatek] - <strong>Sygnały</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/signals-basics"> <em>signals</em> zamiast <em>zone.js</em> </a>
          <a routerLink="/signal-computed"> Stan wyliczany </a>
          <a routerLink="/signal-effect"> Efekty uboczne </a>
          <a routerLink="/signal-store"> Signal store </a>
        </li>
      </ul>
    </nav>
  `,
})
export class MenuComponent {}
