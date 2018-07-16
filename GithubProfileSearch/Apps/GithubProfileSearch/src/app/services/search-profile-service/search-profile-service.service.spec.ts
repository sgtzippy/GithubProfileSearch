import { TestBed, inject } from '@angular/core/testing';

import { SearchProfileServiceService } from './search-profile-service.service';

describe('SearchProfileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchProfileServiceService]
    });
  });

  it('should be created', inject([SearchProfileServiceService], (service: SearchProfileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
