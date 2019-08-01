import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEncuestaComponent } from './boton-encuesta.component';

describe('BotonEncuestaComponent', () => {
  let component: BotonEncuestaComponent;
  let fixture: ComponentFixture<BotonEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
