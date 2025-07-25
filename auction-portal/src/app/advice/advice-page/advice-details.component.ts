import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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

    // jak odebrać dane ze strumienia?
    // STREAM CONSUMER
    this.activatedRoute.params.subscribe((params: Params) => {
      this.adviceId = params['majId'];
    });

    // konsument nr #2: odbieram i podaje w konsoli
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
    });

    this.activatedRoute.params.subscribe({
      next: (params: Params) => {
        console.log(params);
      },
    });

    // Konsument może spodziewać się 3 rzeczy na strumieniu:
    // 1. odbiór danych (next)
    // 2. wystąpienie błędu strumienia (error)
    // 3. zaskończenie emisji (strumienia) (complete)

    // ŻADNA z tych rzeczy - nie może następować równocześnie (1 zasada RxJS)
    // powyżej interesuje nas tylko NEXT - tylko odbiór danych, nie jesteśmy jako konsument, gotowi na
    // error / albo / complete

    // żeby zobaczyć pełny obraz, do subscribe musimy podać obiekt z property typu arrow () => {};
    // API do sprawdzenia 3 rzeczy opisanych powyżej
    this.activatedRoute.params.subscribe({
      next: () => {},
      error: () => {},
      complete: () => {},
    });
  }

  ngOnDestroy(): void {
    console.log('DESTORY: AdviceDetailsComponent!');
  }
}
