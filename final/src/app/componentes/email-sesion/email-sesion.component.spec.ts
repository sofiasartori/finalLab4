import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSesionComponent } from './email-sesion.component';

describe('EmailSesionComponent', () => {
  let component: EmailSesionComponent;
  let fixture: ComponentFixture<EmailSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
