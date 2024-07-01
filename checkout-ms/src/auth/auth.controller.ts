import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("login")
    @UseGuards(LocalGuard)
    signIn(@Req() req: Request) {
       return req.user 
    }

    @Get("profile")
    @UseGuards(JwtAuthGuard)
    profile(@Req() req: Request) {
        console.log("Inside Auth controller profile method")
        return req.user
    }
}
