import { TestBed, inject } from '@angular/core/testing';

import { CosasService } from './cosas.service';

describe('CosasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CosasService]
    });
  });

  it('should be created', inject([CosasService], (service: CosasService) => {
    expect(service).toBeTruthy();
  }));
});
