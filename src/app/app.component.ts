import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookingDialogComponent } from './layout/booking-dialog/booking-dialog.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent, BookingDialogComponent],
  template: `
    <app-header />
    <main><router-outlet /></main>
    <app-footer />
    <app-whatsapp-button />
    <app-booking-dialog />
  `,
})
export class AppComponent {}
