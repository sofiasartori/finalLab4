import { TestBed } from '@angular/core/testing';

import { ArchivosUsuarioService } from './archivos-usuario.service';

describe('ArchivosUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosUsuarioService = TestBed.get(ArchivosUsuarioService);
    expect(service).toBeTruthy();
  });
});
