import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './typeorm/entities/Payment';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    PaymentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      database: "my-db",
      entities: [Payment, User],
      synchronize: true,
      username: "root",
      password: "root"
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
