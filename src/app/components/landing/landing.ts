import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { SolucionesComponent } from '../soluciones/soluciones';
import { Nosotros } from '../nosotros/nosotros';
import { ContactoComponent } from '../contacto/contacto';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    Hero,
    SolucionesComponent,
    Nosotros,
    ContactoComponent,
    MatToolbarModule
  ],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {}
