import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTratamientoComponent } from './alta-tratamiento.component';

describe('AltaTratamientoComponent', () => {
  let component: AltaTratamientoComponent;
  let fixture: ComponentFixture<AltaTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
