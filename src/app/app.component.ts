import { Component } from '@angular/core';
import { NavbarOrganismComponent } from './components/organisms/navbar/navbar.organism';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarOrganismComponent, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {}
