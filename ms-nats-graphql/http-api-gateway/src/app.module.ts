/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NatsClientModule } from './nats-client/nats-client.module';

@Module({
  imports: [
    NatsClientModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
