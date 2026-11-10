import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ShopContentService } from '../../core/services/shop-content.service';
import { MessageFormComponent } from '../../shared/components/message-form.component';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-contact',
  imports: [PageHeroComponent, MessageFormComponent, IconComponent],
  template: `
    <app-page-hero title="Kontakt" />
    <section class="band">
      <div class="wrap">
        <div class="facts">
          <p><app-icon name="pin" /><span><strong>Adresse</strong>{{ shop.shop.address }}, {{ shop.shop.cityLine }}</span></p>
          <p><app-icon name="phone" /><span><strong>Telefon</strong><a [href]="shop.shop.phoneHref">{{ shop.shop.phoneDisplay }}</a></span></p>
          <p><app-icon name="mail" /><span><strong>E-Mail</strong><a [href]="'mailto:' + shop.shop.email">{{ shop.shop.email }}</a></span></p>
          <p><app-icon name="whatsapp" /><span><strong>WhatsApp</strong><a [href]="shop.whatsappUrl()" target="_blank" rel="noopener">Nachricht senden</a></span></p>
        </div>
        <div class="contact-grid">
          <app-message-form />
          <iframe title="Karte des Kammwerk in Hamburg" [src]="mapUrl" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  readonly shop = inject(ShopContentService);
  private readonly sanitizer = inject(DomSanitizer);
  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.shop.shop.mapEmbedUrl);
}
