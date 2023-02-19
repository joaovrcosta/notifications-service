import { Notification } from 'src/application/entities/Notification';
import { NotificationsRepository } from 'src/application/repositories/notificationsRepository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  //Data saved in memory
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
