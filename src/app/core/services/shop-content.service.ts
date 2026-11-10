import { Injectable } from '@angular/core';
import { ABOUT_POINTS, BARBERS, GALLERY, NAV_LINKS, POSTS, PRICES, SERVICES, SHOP, STEPS } from '../data/shop.content';
import { Barber, JournalPost } from '../models/shop.models';

@Injectable({ providedIn: 'root' })
export class ShopContentService {
  readonly shop = SHOP;
  readonly navigation = NAV_LINKS;
  readonly services = SERVICES;
  readonly barbers = BARBERS;
  readonly prices = PRICES;
  readonly steps = STEPS;
  readonly gallery = GALLERY;
  readonly posts = POSTS;
  readonly aboutPoints = ABOUT_POINTS;

  latestPosts(limit = 2): JournalPost[] {
    return this.posts.slice(0, limit);
  }

  postBySlug(slug: string): JournalPost | undefined {
    return this.posts.find((post) => post.slug === slug);
  }

  barberBySlug(slug: string): Barber | undefined {
    return this.barbers.find((barber) => barber.slug === slug);
  }

  whatsappUrl(message = this.shop.whatsappMessage): string {
    return `https://wa.me/${this.shop.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
