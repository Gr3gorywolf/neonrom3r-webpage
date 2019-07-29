import { TestBed } from '@angular/core/testing';

import { RomsServiceService } from './roms-service.service';

describe('RomsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomsServiceService = TestBed.get(RomsServiceService);
    expect(service).toBeTruthy();
  });
});
