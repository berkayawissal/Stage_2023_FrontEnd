import { TestBed } from '@angular/core/testing';

import { PointDeVenteService } from './point-de-vente.service';

describe('PointDeVenteService', () => {
  let service: PointDeVenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointDeVenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
