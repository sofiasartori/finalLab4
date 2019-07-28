import { TestBed } from '@angular/core/testing';

import { HistoriaService } from './historia.service';

describe('HistoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoriaService = TestBed.get(HistoriaService);
    expect(service).toBeTruthy();
  });
});
