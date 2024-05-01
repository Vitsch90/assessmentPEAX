import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview-component';

const routes: Routes = [
  { path: '', component: AccountsOverviewComponent },
  { path: ':id', component: AccountDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
