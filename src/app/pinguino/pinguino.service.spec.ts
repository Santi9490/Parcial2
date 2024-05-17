import { TestBed, async, inject } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PinguinoService } from './pinguino.service';

describe('Service: Paciente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PinguinoService]
    });
  });

  it('should ...', inject([PinguinoService], (service: PinguinoService) => {
    expect(service).toBeTruthy();
  }));
});