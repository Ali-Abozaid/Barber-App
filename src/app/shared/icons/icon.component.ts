import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      @switch (name()) {
        @case ('cut') { <path d="M6 7a2 2 0 1 0 0.1 0M18 17a2 2 0 1 0 .1 0M6 17a2 2 0 1 0 .1 0M8 8l8 8M8 16 16 8" /> }
        @case ('beard') { <path d="M8 8c0 6 1.5 9 4 9s4-3 4-9M9 8V6M15 8V6M9 14h6" /> }
        @case ('shave') { <path d="M4 16c4-1 6-6 8-6s2 2 4 2 3-1 4-2M6 18h8" /> }
        @case ('style') { <path d="M5 16c2-6 4-9 7-9s5 3 7 9M8 16h8" /> }
        @case ('kids') { <circle cx="12" cy="8" r="2.2" /> <path d="M7 18c.6-3 2.2-4.5 5-4.5S16.4 15 17 18" /> }
        @case ('care') { <path d="M12 4c2 3 2 5 0 8-2-3-2-5 0-8zM8 14h8M9 18h6" /> }
        @case ('check') { <path d="M5 12.5 9 16.5 19 7" /> }
        @case ('phone') { <path d="M7 3h3l1.4 3.6-2 1.2a11 11 0 0 0 5 5l1.2-2L20 12v3a2 2 0 0 1-2 2A15 15 0 0 1 5 5a2 2 0 0 1 2-2z" /> }
        @case ('pin') { <path d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10z" /> <circle cx="12" cy="11" r="1.6" /> }
        @case ('mail') { <rect x="3" y="5" width="18" height="14" rx="2" /> <path d="m4 7 8 6 8-6" /> }
        @case ('menu') { <path d="M4 7h16M4 12h16M4 17h16" /> }
        @case ('close') { <path d="M6 6l12 12M18 6 6 18" /> }
        @case ('whatsapp') {
          <path fill="currentColor" stroke="none" d="M12 2.2A9.7 9.7 0 0 0 3.5 16.6L2.2 21.8l5.3-1.3A9.8 9.8 0 1 0 12 2.2zm5.5 13.7c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.5-3.9-4.6-4.1-.2-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.6-.4 1-.4h.3c.3 0 .4 0 .6.5.2.5.8 1.9.8 2s.1.3 0 .5-.3.4-.4.6-.2.3-.1.5c.2.3.7 1.1 1.5 1.8 1 .9 1.8 1.2 2.1 1.3.3.1.4.1.6-.1.2-.2.7-.8.8-1 .2-.3.3-.2.6-.1.2.1 1.5.7 1.8.9.2.1.4.2.5.3.1.2 0 .7-.2 1.3z" />
        }
      }
    </svg>
  `,
  styles: `
    :host { display: inline-flex; }
    svg { width: 1em; height: 1em; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
  `,
})
export class IconComponent {
  readonly name = input.required<string>();
}
