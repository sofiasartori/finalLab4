import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTurnoComponent } from './listar-turno.component';

describe('ListarTurnoComponent', () => {
  let component: ListarTurnoComponent;
  let fixture: ComponentFixture<ListarTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
