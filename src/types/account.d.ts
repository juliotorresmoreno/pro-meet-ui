export interface AccountModel {
  id: string;
  name: string;
  email: string;
  language: string;
  timezone: string;
  newsletter?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
