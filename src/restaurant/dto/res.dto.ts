import { IsEmail, IsNotEmpty } from 'class-validator';
import { Schema as mongooseSchema }  from 'mongoose';

export class ResDto {
    _id: mongooseSchema.Types.ObjectId;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    address: string;
    
    @IsNotEmpty()
    email: string;
  }

  export class UpdateResDto {
    _id: mongooseSchema.Types.ObjectId;
    name: string;
    address: string;
    email: string;
  }  