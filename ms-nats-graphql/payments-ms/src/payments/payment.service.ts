import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "src/typeorm/entities/Payment";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dtos/CreatePayment.dto";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { User } from "src/typeorm/entities/User";


@Injectable()
export class PaymentService {
    constructor(@InjectRepository(Payment) private paymentRepository: Repository<Payment>, @Inject('NATS_SERVICE') private nastClient: ClientProxy) { }

    async createPayment({ userId, ...createPaymentDto }: CreatePaymentDto) {
        const user = await lastValueFrom<User>(this.nastClient.send({ cmd: "getUserById" }, { userId }))


        const newPayment = this.paymentRepository.create(createPaymentDto)
        return this.paymentRepository.save({
            ...newPayment,
            user
        })
    }
}