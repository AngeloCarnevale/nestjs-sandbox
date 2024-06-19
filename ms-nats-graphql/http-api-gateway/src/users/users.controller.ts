import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUser.dto";

@Controller('users')
export class UsersController {

    constructor(@Inject('NATS_SERVICE') private readonly natsClient: ClientProxy) { }

    @Post()
    craeteUSer(@Body() createUserDto: CreateUserDto) {
        return this.natsClient.send({ cmd: 'createUser', }, createUserDto)
    }

    @Get(":id")
    async getUserById(@Param("id") id: string) {
        return this.natsClient.send({ cmd: "getUserById" }, { userId: id })
    }
}