import { TestBed } from '@angular/core/testing';

import { ProduitImplService } from './produit.impl.service';

describe('ProduitImplService', () => {
  let service: ProduitImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
