import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './link.atom.html',
  styleUrls: ['./link.atom.scss']
})
export class LinkAtomComponent {
  @Input() href: string = '#';
  @Input() text: string = '';
  @Input() routerLink?: string | any[] | null = null;
  @Input() target: '_self' | '_blank' = '_self';
  @Input() rel: string = '';
}