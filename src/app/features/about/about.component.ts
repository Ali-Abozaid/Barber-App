import { Component, inject } from '@angular/core';
import { ShopContentService } from '../../core/services/shop-content.service';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-about',
  imports: [PageHeroComponent, IconComponent],
  template: `
    <app-page-hero title="Über uns" image="images/cut-2.png" />
    <section class="band">
      <div class="wrap split">
        <img src="images/about.png" alt="Salon Kammwerk" />
        <div>
          <p class="eyebrow">Hamburg</p>
          <h2>Ein Herrensalon, kein Club</h2>
          <p>Wir haben die Mitgliedschaft aus der Vorlage gestrichen. Bei uns setzt man sich, nennt den Schnitt und zahlt den Preis von der Karte.</p>
          <p>Der Laden ist klein: drei Stühle, Tageslicht an der Straße, Musik leise genug für ein Gespräch.</p>
          <ul>
            @for (point of shop.aboutPoints; track point) {
              <li><app-icon name="check" /> {{ point }}</li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly shop = inject(ShopContentService);
}
