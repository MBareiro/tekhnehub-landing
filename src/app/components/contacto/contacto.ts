import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      escuela: ['', Validators.required],
      nombre: ['', Validators.required],
      whatsapp: ['', Validators.required],
      mensaje: [''],
    });
  }

  enviar(): void {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
      // FUTURO: acá podés hacer POST a una API de Node, enviar mail, o conectarlo a Bigin
      this.form.reset();
    }
  }
}
