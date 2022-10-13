import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Schema as mongooseSchema }  from 'mongoose';

export enum Role{
    USER = 'user',
    ADMIN = 'admin'
}

@Schema()
export class User{
    _id: string;

    @Prop()
    name: string

    @Prop()
    password: string
    
    @Prop({unique: [true, "Duplication email"]})
    email: string    

    @Prop({
        enum: Role,
        default: Role.USER
    })
    role: Role    
}

export const UserSchema = SchemaFactory.createForClass(User)