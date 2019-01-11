import { TestBed } from '@angular/core/testing';

import { StartWarsService } from './start-wars.service';

describe('StartWarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartWarsService = TestBed.get(StartWarsService);
    expect(service).toBeTruthy();
  });
});
