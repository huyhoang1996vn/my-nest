import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, UserDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}
    @Post('signup')
    async signUp(
        @Body() userDto: UserDto,
    ){
        console.log("LOOGETR body ", userDto);
        const existEmail = await this.authService.getUser(userDto.email);
        if (existEmail){
            throw new HttpException('Email exist', 400);
        }
        return this.authService.signUp(userDto);
    }

    @Post('login')
    async login(
        @Body() userDto: LoginDto,
    ){
        console.log("LOOGETR body ", userDto);
        return this.authService.login(userDto);
    }
}
