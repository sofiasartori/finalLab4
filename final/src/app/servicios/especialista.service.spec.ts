import { TestBed } from '@angular/core/testing';

import { EspecialidadesService } from './especialista.service';

describe('EspecialidadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspecialidadesService = TestBed.get(EspecialidadesService);
    expect(service).toBeTruthy();
  });
});
