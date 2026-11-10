import { Component, HostListener, inject } from '@angular/core';
import { UiStateService } from '../../core/services/ui-state.service';
import { BookingFormComponent } from '../../shared/components/booking-form.component';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-booking-dialog',
  imports: [BookingFormComponent, IconComponent],
  template: `
    @if (ui.bookingOpen()) {
      <div class="sheet-back" (click)="ui.closeBooking()">
        <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="book-title" (click)="$event.stopPropagation()">
          <header>
            <h2 id="book-title">Termin anfragen</h2>
            <button type="button" aria-label="Schließen" (click)="ui.closeBooking()"><app-icon name="close" /></button>
          </header>
          <app-booking-form />
        </div>
      </div>
    }
  `,
})
export class BookingDialogComponent {
  readonly ui = inject(UiStateService);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.ui.closeBooking();
  }
}
