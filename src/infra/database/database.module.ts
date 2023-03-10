import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notificationsRepository';
import { PrismaService } from '../../../src/infra/database/prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
