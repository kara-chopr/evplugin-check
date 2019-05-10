import { TestBed, inject } from '@angular/core/testing';

import { EvpluginstationService } from './evpluginstation.service';

describe('EvpluginstationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvpluginstationService]
    });
  });

  it('should be created', inject([EvpluginstationService], (service: EvpluginstationService) => {
    expect(service).toBeTruthy();
  }));
});
