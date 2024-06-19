import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/CreateUser.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    createUser(createUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(createUserDto)

        return this.userRepository.save(newUser)
    }

    async getUserById(userId: string) {
        return await this.userRepository.findOne({ where: { id: userId }, relations: ['payments'] })
    }
}