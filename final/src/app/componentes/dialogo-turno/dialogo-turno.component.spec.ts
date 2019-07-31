import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoTurnoComponent } from './dialogo-turno.component';

describe('DialogoTurnoComponent', () => {
  let component: DialogoTurnoComponent;
  let fixture: ComponentFixture<DialogoTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
