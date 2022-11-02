import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Words } from './words.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Words])],
  providers: [WordsService],
  controllers: [WordsController]
})
export class WordsModule {

  
}
