import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/Account';

@Injectable({ providedIn: 'root' })
export class AccountsApiService {
  apiPath = 'https://frontend-assignment-api.onrender.com/api/v1/';

  constructor(private readonly _httpClient: HttpClient) {}

  public loadAccounts(): Observable<Account[]> {
    const path = `${this.apiPath}accounts`;
    return this._httpClient.get<Account[]>(path);
  }

  public loadAccount(id: number): Observable<Account> {
    const path = `${this.apiPath}accounts/${id}`;
    return this._httpClient.get<Account>(path);
  }
}
