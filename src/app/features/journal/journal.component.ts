import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShopContentService } from '../../core/services/shop-content.service';
import { PageHeroComponent } from '../../shared/components/page-hero.component';

@Component({
  selector: 'app-journal',
  imports: [PageHeroComponent, RouterLink],
  template: `
    <app-page-hero title="Journal" image="images/journal-2.png" />
    <section class="band">
      <div class="wrap cards cards--3">
        @for (post of shop.posts; track post.slug) {
          <article class="post">
            <a [routerLink]="['/journal', post.slug]"><img [src]="post.image" [alt]="post.title" /></a>
            <p class="eyebrow">{{ post.date }} · {{ post.author }}</p>
            <h2><a [routerLink]="['/journal', post.slug]">{{ post.title }}</a></h2>
            <p>{{ post.excerpt }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class JournalComponent {
  readonly shop = inject(ShopContentService);
}
