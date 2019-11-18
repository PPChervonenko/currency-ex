import { TestBed, inject, async } from '@angular/core/testing';

import { ExchangeCurrencyService } from './exchange-currency.service';

describe('ExchangeCurrencyService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeCurrencyService],
    });
  }));

  it('should be created', inject([ExchangeCurrencyService], (service: ExchangeCurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
