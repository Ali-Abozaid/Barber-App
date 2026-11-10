import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiStateService {
  readonly bookingOpen = signal(false);
  readonly menuOpen = signal(false);

  openBooking(): void {
    this.menuOpen.set(false);
    this.bookingOpen.set(true);
  }

  closeBooking(): void {
    this.bookingOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
