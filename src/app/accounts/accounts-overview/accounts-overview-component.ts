import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsApiService } from '../services/accounts-api.service';

@Component({
  selector: 'accounts-overview',
  templateUrl: 'accounts-overview-component.html',
  styleUrls: ['./accounts-overview-component.scss'],
})
export class AccountsOverviewComponent {
  public accounts$ = this._accountsApiService.loadAccounts();

  public displayedColumns: string[] = [
    'avatarUrl',
    'name',
    'status',
    'actions',
  ];

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _accountsApiService: AccountsApiService
  ) {}

  public routeToAccountDetail(id: number) {
    this._router.navigate([id], { relativeTo: this._route });
  }
}
