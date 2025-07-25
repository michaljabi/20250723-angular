import { Component, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  template: `
    <div class="d-flex justify-content-end">
      <div class="input-group mb-3 w-50">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <fa-icon icon="search"/>
          </span>
        </div>
        <input type="text" name="title" class="form-control" [(ngModel)]="searchValue" (input)="handleUpdate()"  />
      </div>
    </div>
  `,
  styles: ``
})
export class SearchBarComponent {

  searchValue = '';
  search = output<string>()

  handleUpdate() {
    this.search.emit(this.searchValue);
  }
}
