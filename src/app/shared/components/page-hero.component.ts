import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-hero',
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <img [src]="image()" alt="" />
      <div class="veil"></div>
      <div class="wrap page-hero__copy">
        <p class="crumbs"><a routerLink="/">Start</a><span>{{ title() }}</span></p>
        <h1>{{ title() }}</h1>
      </div>
    </section>
  `,
})
export class PageHeroComponent {
  readonly title = input.required<string>();
  readonly image = input('images/hero.png');
}
