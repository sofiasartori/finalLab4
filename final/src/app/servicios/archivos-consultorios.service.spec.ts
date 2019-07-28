import { TestBed } from '@angular/core/testing';

import { ArchivosConsultoriosService } from './archivos-consultorios.service';

describe('ArchivosConsultoriosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosConsultoriosService = TestBed.get(ArchivosConsultoriosService);
    expect(service).toBeTruthy();
  });
});
