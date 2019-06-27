import { TestBed } from '@angular/core/testing';

import { ConsultaHorasService } from './consulta-horas.service';

describe('ConsultaHorasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaHorasService = TestBed.get(ConsultaHorasService);
    expect(service).toBeTruthy();
  });
});
