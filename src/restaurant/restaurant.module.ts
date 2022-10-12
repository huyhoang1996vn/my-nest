import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantSchema, Restaurant } from './schemas/res.schema';
import { APIFeatures } from 'src/utils/apiFeature.utils';


@Module({
    imports: [MongooseModule.forFeature([{ name: Restaurant.name, schema: RestaurantSchema }])],
    controllers: [RestaurantController],
    providers: [RestaurantService, APIFeatures]
})
export class RestaurantModule {}
