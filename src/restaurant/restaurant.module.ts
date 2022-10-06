import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantSchema } from './schemas/res.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: "restaurant", schema: RestaurantSchema }])],
    controllers: [RestaurantController],
    providers: [RestaurantService]
})
export class RestaurantModule {}
