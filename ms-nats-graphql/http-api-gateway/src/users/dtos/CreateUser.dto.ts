import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(32)
    username: string;

    @IsOptional()
    @IsString()
    @MaxLength(32)
    displayname?: string;

    @IsEmail()
    @IsNotEmpty()
    email: string
}