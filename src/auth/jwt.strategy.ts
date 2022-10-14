import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // Ref: https://progressivecoder.com/how-to-implement-nestjs-jwt-authentication-using-jwt-strategy/
  
  constructor(private authService: AuthService) {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      });
  }

  async validate(payload: any): Promise<any> {
    console.log("===== payload ", payload);
    const { id } = payload;
    const user = await this.authService.getUserById(id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}