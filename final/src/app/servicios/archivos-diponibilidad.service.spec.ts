import { TestBed } from '@angular/core/testing';

import { ArchivosDiponibilidadService } from './archivos-diponibilidad.service';

describe('ArchivosDiponibilidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosDiponibilidadService = TestBed.get(ArchivosDiponibilidadService);
    expect(service).toBeTruthy();
  });
});
