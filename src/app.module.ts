import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { WordsModule } from './words/words.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule, 
    AuthenticationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username:'postgres',
      password:'postgres',
      database:'!wordle',
      autoLoadEntities: true,
      synchronize:true,
    }),
    WordsModule], 
})
export class AppModule {}
