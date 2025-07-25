import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  // imports: [UpperCasePipe, JsonPipe],
  imports: [CommonModule],
  template: `
    <div>
      Pobieram {{ entityName | uppercase }} id: {{ adviceId }}
      <hr />
      {{ user | json }}
      <hr />
      {{ this.activatedRoute.snapshot.params | json }}
    </div>
  `,
  styles: ``,
})
export class AdviceDetailsComponent implements OnInit, OnDestroy {
  user = { name: 'Michał' };
  entityName = 'artykuł';
  adviceId = '';

  // w zwykłym klasycznym programowaniu OOP:
  // activatedRoute = new ActivatedRoute();

  // 1. w DI - to nie Ty tworzysz instancję
  // 2. kontroluje ją Dependency Injector
  // 3. jest kilka hierarchii Dependency Injectora (?) [TODO: explain later]
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.adviceId = this.activatedRoute.snapshot.params['majId'];
    console.log('AdviceDetailsComponent init!');
  }

  ngOnDestroy(): void {
    console.log('DESTORY: AdviceDetailsComponent!');
  }
}
