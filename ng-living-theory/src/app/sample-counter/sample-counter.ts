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
export class SampleCounterComponent {
  randomNumber = Math.random().toFixed(2);
}
