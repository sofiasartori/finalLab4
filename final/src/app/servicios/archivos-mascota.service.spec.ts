import { TestBed } from '@angular/core/testing';

import { ArchivosMascotaService } from './archivos-mascota.service';

describe('ArchivosMascotaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosMascotaService = TestBed.get(ArchivosMascotaService);
    expect(service).toBeTruthy();
  });
});
