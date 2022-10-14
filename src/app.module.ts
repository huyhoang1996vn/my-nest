import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local',],
      isGlobal: true
    }), 
    MongooseModule.forRoot(process.env.DATABASE_HOST), 
    RestaurantModule, 
    AuthModule
],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
