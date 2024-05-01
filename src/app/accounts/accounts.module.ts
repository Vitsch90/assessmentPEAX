import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview-component';
import { AccountsRoutingModule } from './accounts.routing';
import { AccountsApiService } from './services/accounts-api.service';

@NgModule({
  declarations: [AccountsOverviewComponent, AccountDetailComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [AccountsApiService],
})
export class AccountsModule {}
