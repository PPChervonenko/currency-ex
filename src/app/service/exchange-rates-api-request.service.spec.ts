import { TestBed } from '@angular/core/testing';

import { ExchangeRatesApiRequestService } from './exchange-rates-api-request.service';

describe('ExchangeRatesApiRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeRatesApiRequestService = TestBed.get(ExchangeRatesApiRequestService);
    expect(service).toBeTruthy();
  });
});
