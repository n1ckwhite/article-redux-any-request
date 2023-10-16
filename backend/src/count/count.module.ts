import { Module } from '@nestjs/common';
import { CountController } from './count.controller';
import { CountService } from './count.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [CountController],
  providers: [CountService, DatabaseService],
})
export class CountModule {}
