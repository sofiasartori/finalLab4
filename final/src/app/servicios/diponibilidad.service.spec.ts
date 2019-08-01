import { TestBed } from '@angular/core/testing';

import { DiponibilidadService } from './diponibilidad.service';

describe('DiponibilidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiponibilidadService = TestBed.get(DiponibilidadService);
    expect(service).toBeTruthy();
  });
});
