import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitacion } from '../modelos/habitacion.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  // Aquí se conecta con el backend de FastAPI diseñado anteriormente [cite: 22, 28]
  private API_URL = 'http://localhost:8000/habitaciones'; 

  constructor(private http: HttpClient) { }

  listarHabitaciones(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(this.API_URL);
  }
}