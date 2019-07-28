import { TestBed } from '@angular/core/testing';

import { ArchivosEspecialistasService } from './archivos-especialistas.service';

describe('ArchivosEspecialistasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosEspecialistasService = TestBed.get(ArchivosEspecialistasService);
    expect(service).toBeTruthy();
  });
});
