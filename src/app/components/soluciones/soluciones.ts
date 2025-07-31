import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-soluciones',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './soluciones.html',
  styleUrls: ['./soluciones.css']
})
export class SolucionesComponent {}
