import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CMFService } from './cmf.service';

describe('CMFService', () => {
  let service: CMFService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CMFService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
