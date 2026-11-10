import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ShopContentService } from '../../core/services/shop-content.service';
import { UiStateService } from '../../core/services/ui-state.service';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, IconComponent],
  template: `
    <header class="top" [class.top--solid]="solid || ui.menuOpen()">
      <div class="wrap top__bar">
        <a class="brand" routerLink="/" (click)="ui.closeMenu()">{{ shop.shop.logoLead }}<span>{{ shop.shop.logoAccent }}</span></a>
        <button class="burger" type="button" [attr.aria-expanded]="ui.menuOpen()" aria-label="Menü" (click)="ui.toggleMenu()">
          <app-icon [name]="ui.menuOpen() ? 'close' : 'menu'" />
        </button>
        <nav [class.is-open]="ui.menuOpen()">
          @for (link of shop.navigation; track link.path) {
            <a [routerLink]="link.path" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: link.path === '/' }" (click)="ui.closeMenu()">{{ link.label }}</a>
          }
          <button class="btn btn--small" type="button" (click)="ui.openBooking()">Termin</button>
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly shop = inject(ShopContentService);
  readonly ui = inject(UiStateService);
  solid = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.solid = window.scrollY > 30;
  }
}
