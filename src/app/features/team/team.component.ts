import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShopContentService } from '../../core/services/shop-content.service';
import { PageHeroComponent } from '../../shared/components/page-hero.component';

@Component({
  selector: 'app-team',
  imports: [PageHeroComponent, RouterLink],
  template: `
    <app-page-hero title="Team" image="images/cut-1.png" />
    <section class="band">
      <div class="wrap cards cards--3">
        @for (barber of shop.barbers; track barber.slug) {
          <article class="person">
            <a [routerLink]="['/team', barber.slug]"><img [src]="barber.image" [alt]="barber.name" /></a>
            <p class="eyebrow">{{ barber.role }}</p>
            <h2><a [routerLink]="['/team', barber.slug]">{{ barber.name }}</a></h2>
            <p>{{ barber.shortBio }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class TeamComponent {
  readonly shop = inject(ShopContentService);
}
