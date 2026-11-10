import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShopContentService } from '../../core/services/shop-content.service';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, IconComponent],
  template: `
    <footer class="foot">
      <div class="wrap foot__grid">
        <div>
          <h2>{{ shop.shop.logoLead }}<span>{{ shop.shop.logoAccent }}</span></h2>
          <p>Herrensalon in Hamburg. Leistungen, Preise und Team – die Terminmaske ist eine Demo ohne Server.</p>
        </div>
        <div>
          <h2>Seiten</h2>
          <ul>
            @for (link of shop.navigation; track link.path) {
              <li><a [routerLink]="link.path">{{ link.label }}</a></li>
            }
          </ul>
        </div>
        <div>
          <h2>Salon</h2>
          <ul class="contact-lines">
            <li><app-icon name="pin" /><span>{{ shop.shop.address }}<br />{{ shop.shop.cityLine }}</span></li>
            <li><app-icon name="phone" /><a [href]="shop.shop.phoneHref">{{ shop.shop.phoneDisplay }}</a></li>
            <li><app-icon name="mail" /><a [href]="'mailto:' + shop.shop.email">{{ shop.shop.email }}</a></li>
          </ul>
        </div>
      </div>
      <p class="legal">© {{ year }} Kammwerk. Alle Rechte vorbehalten.</p>
    </footer>
    <aside class="zagros">
      <div class="zagros__inner">
        <a class="zagros__logo" href="https://zagros-werbeagentur.com" target="_blank" rel="noopener noreferrer">
          <img src="zagros-logo.png" alt="Zagros Werbeagentur" />
        </a>
        <div>
          <h2>Sie möchten eine Website wie diese?</h2>
          <p>Salonauftritt mit Leistungen, Preisen und WhatsApp. Wir gestalten und bauen die Seite für Ihren Laden.</p>
          <div class="zagros__links">
            <a href="https://zagros-werbeagentur.com" target="_blank" rel="noopener noreferrer">zagros-werbeagentur.com</a>
            <a href="https://wa.me/491784013235" target="_blank" rel="noopener noreferrer">WhatsApp +49 178 401 3235</a>
          </div>
        </div>
      </div>
    </aside>
  `,
})
export class FooterComponent {
  readonly shop = inject(ShopContentService);
  readonly year = new Date().getFullYear();
}
