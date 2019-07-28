import { TestBed } from '@angular/core/testing';

import { ArchivosEncuestaService } from './archivos-encuesta.service';

describe('ArchivosEncuestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosEncuestaService = TestBed.get(ArchivosEncuestaService);
    expect(service).toBeTruthy();
  });
});
