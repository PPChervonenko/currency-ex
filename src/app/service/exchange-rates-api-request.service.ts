import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { ExchangeRatesResponse } from '../model/exchange-rates.model';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class ExchangeRatesApiRequestService {
  constructor(public http: HttpClient) {}

  public getExchangeRates(baseCurrency: string): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(`${environment.exchangeRatesAPIUrl}/latest?base=${baseCurrency}`);
  }
}
