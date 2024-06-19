/* eslint-disable prettier/prettier */
import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUser.dto";

@Controller('users')
export class UsersController {

    constructor(@Inject('NATS_SERVICE') private readonly natsClient: ClientProxy) { }

    @Post()
    craeteUSer(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        this.natsClient.send("", createUserDto)
    }
}