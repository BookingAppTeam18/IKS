import { TestBed } from '@angular/core/testing';

import { CreateAccommodationMapService } from './create-accommodation-map.service';

describe('CreateAccommodationMapService', () => {
  let service: CreateAccommodationMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAccommodationMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
