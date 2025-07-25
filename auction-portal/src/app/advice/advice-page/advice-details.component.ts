import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [UpperCasePipe, JsonPipe],
  template: `
    <div>
      Pobieram {{ entityName | uppercase }} id: {{ adviceId }}
      <hr />
      {{ user | json }}
    </div>
  `,
  styles: ``,
})
export class AdviceDetailsComponent {
  user = { name: 'Michał' };
  entityName = 'artykuł';
  adviceId = '';

  activatedRoute = inject(ActivatedRoute);
}
