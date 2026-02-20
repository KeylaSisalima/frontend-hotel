import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../servicios/hotel.service';
import { Habitacion } from '../../modelos/habitacion.model';

@Component({
  selector: 'app-lista-habitaciones',
  templateUrl: './lista-habitaciones.html',
  styleUrls: ['./lista-habitaciones.css']
})
export class ListaHabitacionesComponent implements OnInit {
  habitaciones: Habitacion[] = [];

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    // Llama al servicio para obtener los datos al iniciar [cite: 32, 33]
    this.hotelService.listarHabitaciones().subscribe(data => {
      this.habitaciones = data;
    });
  }
}