import {inject, TestBed} from '@angular/core/testing';

import {StudentManagementService} from './student-management.service';

describe('StudentManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentManagementService]
    });
  });

  it('should be created', inject([StudentManagementService], (service: StudentManagementService) => {
    expect(service).toBeTruthy();
  }));
});
