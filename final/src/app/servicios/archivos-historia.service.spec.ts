import { TestBed } from '@angular/core/testing';

import { ArchivosHistoriaService } from './archivos-historia.service';

describe('ArchivosHistoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosHistoriaService = TestBed.get(ArchivosHistoriaService);
    expect(service).toBeTruthy();
  });
});
