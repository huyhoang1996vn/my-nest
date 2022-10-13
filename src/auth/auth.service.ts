import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User, UserSchema } from './schemas/auth.schemas';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { APIFeatures } from 'src/utils/apiFeature.utils';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel = mongoose.model('User', UserSchema),
        private jwtService: JwtService,
        private apiFeatures : APIFeatures
    ){}

    async signUp(user: User): Promise<User>{
        const saltOrRounds = 10;
        const passwordHash = await bcrypt.hash(user.password, saltOrRounds);
        user.password = passwordHash
        return this.userModel.create(user)
    }

    async getUser(email:string){
        const query = {
            email: email
        }
        return this.userModel.exists(query)
    }

    async login(user: User) {
        const userDB = await this.userModel.findOne({email: user.email})
        if (!userDB){
            throw new UnauthorizedException("Not found user.");
        }

        const isMatch = await bcrypt.compare(user.password, userDB.password);
        console.log("+==== isMatch ", isMatch);
        if (!isMatch){
            throw new UnauthorizedException("Password incorrect.");
        }

        const token = await this.apiFeatures.generateToken(userDB._id, this.jwtService);
        return {profile: userDB, token: token}
    }

}
