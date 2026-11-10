import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ShopContentService } from '../../core/services/shop-content.service';

@Component({
  selector: 'app-journal-detail',
  imports: [RouterLink],
  template: `
    @if (post(); as article) {
      <header class="page-hero">
        <img [src]="article.image" alt="" />
        <div class="veil"></div>
        <div class="wrap page-hero__copy">
          <p class="crumbs"><a routerLink="/journal">Journal</a><span>Beitrag</span></p>
          <h1>{{ article.title }}</h1>
        </div>
      </header>
      <article class="band">
        <div class="wrap narrow">
          <p class="eyebrow">{{ article.date }} · {{ article.author }}</p>
          @for (paragraph of article.paragraphs; track paragraph) { <p>{{ paragraph }}</p> }
          <a class="btn" routerLink="/journal">Alle Beiträge</a>
        </div>
      </article>
    } @else {
      <section class="band wrap"><h1>Beitrag nicht gefunden</h1><a routerLink="/journal">Zurück</a></section>
    }
  `,
})
export class JournalDetailComponent {
  private readonly shop = inject(ShopContentService);
  private readonly route = inject(ActivatedRoute);
  readonly post = toSignal(this.route.paramMap.pipe(map((params) => this.shop.postBySlug(params.get('slug') ?? ''))));
}
