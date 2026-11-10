import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent), title: 'Kammwerk | Barbershop in Hamburg' },
  { path: 'ueber-uns', loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent), title: 'Über uns | Kammwerk' },
  { path: 'leistungen', loadComponent: () => import('./features/services/services.component').then((m) => m.ServicesComponent), title: 'Leistungen | Kammwerk' },
  { path: 'team', loadComponent: () => import('./features/team/team.component').then((m) => m.TeamComponent), title: 'Team | Kammwerk' },
  { path: 'team/:slug', loadComponent: () => import('./features/team/barber-detail.component').then((m) => m.BarberDetailComponent), title: 'Profil | Kammwerk' },
  { path: 'galerie', loadComponent: () => import('./features/gallery/gallery.component').then((m) => m.GalleryComponent), title: 'Galerie | Kammwerk' },
  { path: 'journal', loadComponent: () => import('./features/journal/journal.component').then((m) => m.JournalComponent), title: 'Journal | Kammwerk' },
  { path: 'journal/:slug', loadComponent: () => import('./features/journal/journal-detail.component').then((m) => m.JournalDetailComponent), title: 'Beitrag | Kammwerk' },
  { path: 'kontakt', loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent), title: 'Kontakt | Kammwerk' },
  { path: '**', redirectTo: '' },
];
