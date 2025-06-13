export interface NotificationModel {
  id: string;
  title: string;
  read: boolean;
  metadata: {
    type: string;
    message: string;
  };
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
