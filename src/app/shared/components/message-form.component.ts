import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  imports: [ReactiveFormsModule],
  template: `
    <form class="form" [formGroup]="form" (ngSubmit)="submit()">
      <label><span class="sr-only">Name</span><input formControlName="name" placeholder="Name" /></label>
      <label><span class="sr-only">E-Mail</span><input type="email" formControlName="email" placeholder="E-Mail" /></label>
      <label><span class="sr-only">Nachricht</span><textarea rows="5" formControlName="message" placeholder="Nachricht"></textarea></label>
      <button class="btn" type="submit">Nachricht schreiben</button>
      @if (done()) {
        <p class="note" role="status">Danke. Ohne Backend wird nichts versendet. Für einen Termin nutzen Sie WhatsApp.</p>
      } @else if (form.invalid && form.touched) {
        <p class="note note--bad">Name, E-Mail und eine Nachricht fehlen noch.</p>
      }
    </form>
  `,
})
export class MessageFormComponent {
  private readonly fb = inject(FormBuilder);
  readonly done = signal(false);
  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  submit(): void {
    this.form.markAllAsTouched();
    this.done.set(this.form.valid);
  }
}
