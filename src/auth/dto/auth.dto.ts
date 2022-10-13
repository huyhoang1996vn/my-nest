import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { Role } from '../schemas/auth.schemas';
import { Schema as mongooseSchema }  from 'mongoose';


export class UserDto{
    _id: string;

    @IsNotEmpty() name: string;
    
    @IsNotEmpty() password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsEnum({emum: Role, default: Role.USER}) role: Role
}

export class LoginDto{
    _id: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty() password: string;

    name: string;
    role: Role;
}
