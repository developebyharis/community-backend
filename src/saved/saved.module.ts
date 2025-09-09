import { Module } from '@nestjs/common';
import { SavedController } from './saved.controller';
import { SavedService } from './saved.service';

@Module({
  providers: [SavedService],
  controllers: [SavedController],
})
export class SavedModule {}
