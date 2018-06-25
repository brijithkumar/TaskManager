import { TestBed, inject } from '@angular/core/testing';

import { WorkOutService } from './work-out.service';

describe('WorkOutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkOutService]
    });
  });

  it('should be created', inject([WorkOutService], (service: WorkOutService) => {
    expect(service).toBeTruthy();
  }));
});
