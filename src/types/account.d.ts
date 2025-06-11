export interface AccountModel {
  id: string;
  name: string;
  email: string;
  language: string;
  timezone: string;
  newsletter?: boolean;
  plan: string;
  createdAt: Date;
  updatedAt: Date;
}
