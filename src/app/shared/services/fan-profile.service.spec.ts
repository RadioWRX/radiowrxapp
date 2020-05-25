import { TestBed } from '@angular/core/testing';

import { FanProfileService } from './fan-profile.service';

describe('FanProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FanProfileService = TestBed.get(FanProfileService);
    expect(service).toBeTruthy();
  });
});
