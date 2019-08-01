import { TestBed } from '@angular/core/testing';

import { ArchivosTratamientoService } from './archivos-tratamiento.service';

describe('ArchivosTratamientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosTratamientoService = TestBed.get(ArchivosTratamientoService);
    expect(service).toBeTruthy();
  });
});
