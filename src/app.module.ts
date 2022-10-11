import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.development.local',]
  }), MongooseModule.forRoot(process.env.DATABASE_HOST), RestaurantModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
