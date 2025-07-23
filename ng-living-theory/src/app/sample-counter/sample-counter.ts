import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-counter',
  imports: [],
  template: `
    <div class="m-5">
      HELLO WORLD <code> {{ randomNumber }}</code>
    </div>
  `,
  styles: ``,
})
export class SampleCounter {
  // randomNumber: string | number = Math.random().toFixed(2);
  randomNumber = Math.random().toFixed(2);

  constructor() {
    setInterval(() => {
      // this.randomNumber = '1000';
      this.randomNumber = Math.random().toFixed(2);
    }, 2000);
  }
}
