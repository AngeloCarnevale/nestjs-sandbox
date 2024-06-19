import { Module } from "@nestjs/common"
import { UsersMicroserviceController } from "./users.controller";
import { UserService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { Payment } from "src/typeorm/entities/Payment";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Payment])
    ],
    controllers: [UsersMicroserviceController],
    providers: [UserService]
})
export class UsersModule { }