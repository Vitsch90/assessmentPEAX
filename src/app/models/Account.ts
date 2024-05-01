import { AccountStatus } from './AccountStatus';

export interface Account {
  id: number;
  name: string;
  createdAt: Date;
  avatarUrl: string;
  status: AccountStatus;
}
