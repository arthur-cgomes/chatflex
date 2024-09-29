import { Module } from '@nestjs/common';
import { DatabaseServiceService } from './database-service.service';
import { DatabaseServiceController } from './database-service.controller';

@Module({
  providers: [DatabaseServiceService],
  controllers: [DatabaseServiceController]
})
export class DatabaseServiceModule {}
