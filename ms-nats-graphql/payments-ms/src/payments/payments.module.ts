import { Module } from "@nestjs/common";
import { PaymentsMicroserviceController } from "./payments.controller";
import { NatsClientModule } from "src/nats-client/nats-client.module";
import { Payment } from "src/typeorm/entities/Payment";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentService } from "./payment.service";
import { User } from "src/typeorm/entities/User";

@Module({
    imports: [NatsClientModule,
        TypeOrmModule.forFeature([Payment, User])
    ],
    controllers: [PaymentsMicroserviceController],
    providers: [PaymentService]
})
export class PaymentsModule { }