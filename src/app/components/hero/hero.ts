import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, HeaderComponent],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero {
  scrollToContacto(): void {
    const el = document.getElementById('contacto-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
