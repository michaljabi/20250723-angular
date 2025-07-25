import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuctionItem } from '../auction-item';
import { AuctionsResourceService } from '../auctions-resource.service';

@Component({
  imports: [SharedModule, ReactiveFormsModule],
  template: `
    <div>
      <h2>Dodaj aukcję</h2>
      <section class="mt-2 row">
        <div class="col-6">
          <img class="img-thumbnail" alt="Podgląd fotografii" [src]="imgUrl" />
        </div>
        <div class="col-6">
          <form [formGroup]="newAuctionForm" (ngSubmit)="handleAddAuction()">
            <div class="form-group">
              <label for="auctionTitle">Nazwa aukcji *</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <fa-icon icon="edit"></fa-icon>
                  </span>
                </div>
                <input
                  id="auctionTitle"
                  type="text"
                  formControlName="title"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="auctionPrice">Cena aukcji *</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-tag"></i>
                    <fa-icon icon="tag"></fa-icon>
                  </span>
                </div>
                <input
                  id="auctionPrice"
                  type="number"
                  formControlName="price"
                  class="form-control"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="img">Zdjecie</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <fa-icon icon="image"></fa-icon>
                  </span>
                </div>
                <input
                  id="img"
                  type="number"
                  formControlName="imgId"
                  min="1"
                  max="1080"
                  class="form-control"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="auctionDescription">Szczegółowy opis</label>
              <div class="input-group mb-3">
                <textarea
                  id="auctionDescription"
                  rows="5"
                  class="form-control"
                  formControlName="description"
                ></textarea>
              </div>
            </div>
            <div class="text-right">
              <button
                class="btn btn-primary"
                type="submit"
                [style]="{ opacity: newAuctionForm.valid ? '1' : '0.8' }"
              >
                <fa-icon icon="gavel"></fa-icon> Dodaj aukcję
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  `,
  styles: `
    input.ng-touched.ng-invalid,
    textarea.ng-touched.ng-invalid {
      border: 2px solid #f14668;
    }
  `,
})
export class AddAuctionPageComponent {
  auctionResourceService = inject(AuctionsResourceService);

  private fb = inject(FormBuilder);
  newAuctionForm = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    imgId: [1, [Validators.min(1), Validators.max(1080)]],
    description: [''],
  });

  get imgUrl() {
    return `https://picsum.photos/id/${this.newAuctionForm.value.imgId}/600/600`;
  }

  handleAddAuction() {
    if (this.newAuctionForm.invalid) {
      this.newAuctionForm.markAllAsTouched();
      return;
    }
    console.log(this.newAuctionForm.value);
    // destructuring:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
    // const {title, price, description} = this.newAuctionForm.value;

    const newAuction: Omit<AuctionItem, 'id'> = {
      title: String(this.newAuctionForm.value.title),
      imgUrl: this.imgUrl,
      price: Number(this.newAuctionForm.value.price),
      description: this.newAuctionForm.value.description
        ? String(this.newAuctionForm.value.description)
        : undefined,
    };
    // send AJAX....
    this.auctionResourceService.addOne(newAuction).subscribe({
      next: (auction: AuctionItem) => {
        // tutaj warca auction z id
        console.log('NEW AUCTION added', auction);
        // wszystko ok, reset formy
        this.newAuctionForm.reset({ imgId: 1 });
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
