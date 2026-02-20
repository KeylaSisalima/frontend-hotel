import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HotelService } from '../../servicios/hotel.service';
import { Habitacion } from '../../modelos/habitacion.model';

@Component({
  selector: 'app-lista-habitaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-habitaciones.html',
  styleUrls: ['./lista-habitaciones.css']
})
export class ListaHabitacionesComponent implements OnInit {
  
  // Arreglo donde se guardarán las habitaciones que vienen del backend
  habitaciones: Habitacion[] = [];

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    // Llamamos al servicio al iniciar el componente
    this.listar();
  }

  listar(): void {
    this.hotelService.listarHabitaciones().subscribe({
      next: (data) => {
        this.habitaciones = data;
        console.log('Datos cargados con éxito:', data);
      },
      error: (err) => {
        console.error('Error al cargar habitaciones:', err);
      }
    });
  }
}