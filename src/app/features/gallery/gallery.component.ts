import { Component, inject } from '@angular/core';
import { ShopContentService } from '../../core/services/shop-content.service';
import { PageHeroComponent } from '../../shared/components/page-hero.component';

@Component({
  selector: 'app-gallery',
  imports: [PageHeroComponent],
  template: `
    <app-page-hero title="Galerie" image="images/cut-4.png" />
    <section class="mosaic mosaic--page">
      @for (shot of shop.gallery; track shot.image) {
        <figure [class.is-wide]="shot.wide"><img [src]="shot.image" [alt]="shot.alt" /></figure>
      }
    </section>
  `,
})
export class GalleryComponent {
  readonly shop = inject(ShopContentService);
}
