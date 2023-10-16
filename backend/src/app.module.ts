import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseService } from './database/database.service';
import { CountModule } from './count/count.module';

@Module({
  imports: [CountModule],
  controllers: [AppController],
  providers: [DatabaseService],
})
export class AppModule {}
