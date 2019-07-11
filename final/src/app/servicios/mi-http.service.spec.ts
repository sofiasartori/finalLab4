import { TestBed } from '@angular/core/testing';

import { MiHttpService } from './mi-http.service';

describe('MiHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiHttpService = TestBed.get(MiHttpService);
    expect(service).toBeTruthy();
  });
});
