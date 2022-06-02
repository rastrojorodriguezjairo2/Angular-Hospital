import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPacientesComponent } from './grafica-pacientes.component';

describe('GraficaPacientesComponent', () => {
  let component: GraficaPacientesComponent;
  let fixture: ComponentFixture<GraficaPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
