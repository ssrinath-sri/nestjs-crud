import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpModule } from './emp/emp.module';

@Module({
  imports: [EmpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
