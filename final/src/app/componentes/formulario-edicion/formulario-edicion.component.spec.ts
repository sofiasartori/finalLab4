import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEdicionComponent } from './formulario-edicion.component';

describe('FormularioEdicionComponent', () => {
  let component: FormularioEdicionComponent;
  let fixture: ComponentFixture<FormularioEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
