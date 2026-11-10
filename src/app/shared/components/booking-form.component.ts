import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShopContentService } from '../../core/services/shop-content.service';

@Component({
  selector: 'app-booking-form',
  imports: [ReactiveFormsModule],
  template: `
    <form class="form" [formGroup]="form" (ngSubmit)="submit()">
      <label>
        <span class="sr-only">Leistung</span>
        <select formControlName="service">
          <option value="">Leistung wählen</option>
          @for (service of shop.services; track service.id) {
            <option [value]="service.title">{{ service.title }} · {{ service.price }}</option>
          }
        </select>
      </label>
      <label><span class="sr-only">Name</span><input formControlName="name" placeholder="Name" /></label>
      <label><span class="sr-only">Telefon</span><input formControlName="phone" placeholder="Telefon" /></label>
      <div class="form__pair">
        <label><span class="sr-only">Datum</span><input type="date" formControlName="date" /></label>
        <label><span class="sr-only">Uhrzeit</span><input type="time" formControlName="time" /></label>
      </div>
      <button class="btn" type="submit">Termin vormerken</button>
      @if (done()) {
        <p class="note" role="status">Danke. Das ist eine Demo ohne Server – die Anfrage bleibt im Browser. Schreiben Sie uns über WhatsApp.</p>
      } @else if (form.invalid && form.touched) {
        <p class="note note--bad">Bitte Name und Telefon angeben.</p>
      }
    </form>
  `,
})
export class BookingFormComponent {
  readonly shop = inject(ShopContentService);
  private readonly fb = inject(FormBuilder);
  readonly done = signal(false);
  readonly form = this.fb.nonNullable.group({
    service: [''],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    date: [''],
    time: [''],
  });

  submit(): void {
    this.form.markAllAsTouched();
    this.done.set(this.form.valid);
  }
}
