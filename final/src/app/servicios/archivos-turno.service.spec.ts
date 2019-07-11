import { TestBed } from '@angular/core/testing';

import { ArchivosTurnoService } from './archivos-turno.service';

describe('ArchivosTurnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosTurnoService = TestBed.get(ArchivosTurnoService);
    expect(service).toBeTruthy();
  });
});
