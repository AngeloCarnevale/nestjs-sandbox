import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./typeorm/entities/User";
import { Payment } from "./typeorm/entities/Payment";

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      database: "my-db",
      entities: [User, Payment],
      synchronize: true,
      username: "root",
      password: "root"
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
