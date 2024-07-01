import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dtos/auth.dto';

const fakeUsers = [
    {
        id: 1,
        username: "angelo",
        password: "1234"
    }

]

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) { }

    validateUser({ username, password }: AuthPayloadDto) {
        const findUser = fakeUsers.find(
            (user) => user.username === username
        )
        console.log(findUser)
        if (!findUser) return null

        if (password === findUser.password) {
            const { password, ...user } = findUser
            return this.jwtService.sign(user)
        }
    }
}
