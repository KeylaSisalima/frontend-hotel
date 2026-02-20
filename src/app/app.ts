import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importamos tu componente de la carpeta componentes
import { ListaHabitacionesComponent } from './componentes/lista-habitaciones/lista-habitaciones';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaHabitacionesComponent], // Aquí le damos permiso de usarse
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'frontend-hotel';
  }