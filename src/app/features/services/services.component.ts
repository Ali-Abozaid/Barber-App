import { Component, inject } from '@angular/core';
import { ShopContentService } from '../../core/services/shop-content.service';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-services',
  imports: [PageHeroComponent, IconComponent],
  template: `
    <app-page-hero title="Leistungen" image="images/cut-3.png" />
    <section class="band">
      <div class="wrap service-list">
        @for (service of shop.services; track service.id) {
          <article [id]="service.id">
            <span class="card__icon"><app-icon [name]="service.icon" /></span>
            <div>
              <h2>{{ service.title }} <small>{{ service.price }}</small></h2>
              <p>{{ service.details }}</p>
            </div>
          </article>
        }
      </div>
    </section>
    <section class="band band--paper">
      <div class="wrap narrow">
        <h2>Preisliste</h2>
        <ul class="price-list">
          @for (line of shop.prices; track line.name) {
            <li><span>{{ line.name }}</span><span>{{ line.price }}</span></li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  readonly shop = inject(ShopContentService);
}
