import { TestBed } from '@angular/core/testing';

import { ArchivosEspecialidadService } from './archivos-especialidad.service';

describe('ArchivosEspecialidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosEspecialidadService = TestBed.get(ArchivosEspecialidadService);
    expect(service).toBeTruthy();
  });
});
