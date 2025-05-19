import { Component } from '@angular/core';
import { ImageAtomComponent } from '../../atoms/image/image.atom';
import { LinkAtomComponent } from '../../atoms/link/link.atom';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ImageAtomComponent, LinkAtomComponent],
  templateUrl: './navbar.organism.html',
  styleUrls: ['./navbar.organism.scss']
})
export class NavbarOrganismComponent {}