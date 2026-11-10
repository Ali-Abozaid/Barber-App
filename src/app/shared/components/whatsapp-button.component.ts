import { Component, inject } from '@angular/core';
import { ShopContentService } from '../../core/services/shop-content.service';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-whatsapp-button',
  imports: [IconComponent],
  template: `
    <a class="whatsapp-fab" [href]="shop.whatsappUrl()" target="_blank" rel="noopener noreferrer" aria-label="Per WhatsApp schreiben">
      <app-icon name="whatsapp" />
      <span>WhatsApp</span>
    </a>
  `,
})
export class WhatsappButtonComponent {
  readonly shop = inject(ShopContentService);
}
