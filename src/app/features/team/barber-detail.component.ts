import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ShopContentService } from '../../core/services/shop-content.service';

@Component({
  selector: 'app-barber-detail',
  imports: [RouterLink],
  template: `
    @if (barber(); as person) {
      <article class="band">
        <div class="wrap split">
          <img [src]="person.image" [alt]="person.name" />
          <div>
            <p class="crumbs crumbs--dark"><a routerLink="/team">Team</a><span>{{ person.name }}</span></p>
            <h1>{{ person.name }}</h1>
            <p class="eyebrow">{{ person.role }}</p>
            @for (paragraph of person.bio; track paragraph) { <p>{{ paragraph }}</p> }
            <ul>
              @for (item of person.focus; track item) { <li>{{ item }}</li> }
            </ul>
            <a class="btn" routerLink="/kontakt">Kontakt</a>
          </div>
        </div>
      </article>
    } @else {
      <section class="band wrap"><h1>Profil nicht gefunden</h1><a routerLink="/team">Zurück zum Team</a></section>
    }
  `,
})
export class BarberDetailComponent {
  private readonly shop = inject(ShopContentService);
  private readonly route = inject(ActivatedRoute);
  readonly barber = toSignal(this.route.paramMap.pipe(map((params) => this.shop.barberBySlug(params.get('slug') ?? ''))));
}
