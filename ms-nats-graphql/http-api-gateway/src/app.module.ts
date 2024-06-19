import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NatsClientModule } from './nats-client/nats-client.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    NatsClientModule,
    UsersModule,
    PaymentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
