import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaTurnosComponent } from './fecha-turnos.component';

describe('FechaTurnosComponent', () => {
  let component: FechaTurnosComponent;
  let fixture: ComponentFixture<FechaTurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaTurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
