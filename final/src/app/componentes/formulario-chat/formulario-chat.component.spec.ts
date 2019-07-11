import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioChatComponent } from './formulario-chat.component';

describe('FormularioChatComponent', () => {
  let component: FormularioChatComponent;
  let fixture: ComponentFixture<FormularioChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
