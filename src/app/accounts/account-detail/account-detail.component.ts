import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { AccountsApiService } from '../services/accounts-api.service';

@Component({
  selector: 'account-detail',
  templateUrl: 'account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
  public accountId: number | null = null;
  public account: Account | null = null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private readonly _accountsApiService: AccountsApiService
  ) {}

  public ngOnInit(): void {
    this._route.params.subscribe((params) => (this.accountId = params['id']));
    if (this.accountId !== null) {
      this._accountsApiService
        .loadAccount(this.accountId)
        .subscribe((account) => (this.account = account));
    }
  }

  public navigateToOverview(): void {
    this._router.navigateByUrl('/accounts');
  }
}
