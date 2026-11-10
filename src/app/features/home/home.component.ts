import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShopContentService } from '../../core/services/shop-content.service';
import { UiStateService } from '../../core/services/ui-state.service';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, IconComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly shop = inject(ShopContentService);
  readonly ui = inject(UiStateService);
}
