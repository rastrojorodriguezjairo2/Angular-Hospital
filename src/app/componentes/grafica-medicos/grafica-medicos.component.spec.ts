import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaMedicosComponent } from './grafica-medicos.component';

describe('GraficaMedicosComponent', () => {
  let component: GraficaMedicosComponent;
  let fixture: ComponentFixture<GraficaMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
