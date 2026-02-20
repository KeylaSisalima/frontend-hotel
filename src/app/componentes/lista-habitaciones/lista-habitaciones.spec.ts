import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHabitacionesComponent } from './lista-habitaciones';

describe('ListaHabitaciones', () => {
  let component: ListaHabitacionesComponent;
  let fixture: ComponentFixture<ListaHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaHabitacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHabitacionesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
