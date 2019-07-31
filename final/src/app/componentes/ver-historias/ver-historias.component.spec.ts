import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHistoriasComponent } from './ver-historias.component';

describe('VerHistoriasComponent', () => {
  let component: VerHistoriasComponent;
  let fixture: ComponentFixture<VerHistoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerHistoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
