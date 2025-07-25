import {Component, input} from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: false,
  template: `
    <div class="alert" [ngClass]="'alert-' + type()" role="alert">
      <ng-content />
    </div>
  `,
  styles: ``
})
export class NotificationComponent {
    type = input<'info' | 'danger' | 'warning' | 'success' >('info');
}
