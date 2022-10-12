import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Schema as mongooseSchema }  from 'mongoose';

export class ResDto {
    _id: mongooseSchema.Types.ObjectId;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    address: string;
    
    @IsNotEmpty()
    @IsEmail({}, {message: "Invalid email"})
    email: string;

    image: string;

  }

  export class UpdateResDto {
    _id: mongooseSchema.Types.ObjectId;
    name: string;
    address: string;
    @IsEmail({}, {message: "Invalid email"})
    email: string;
    image: string;
 }  