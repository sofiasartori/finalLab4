import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroTurnosComponent } from './filtro-turnos.component';

describe('FiltroTurnosComponent', () => {
  let component: FiltroTurnosComponent;
  let fixture: ComponentFixture<FiltroTurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroTurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
