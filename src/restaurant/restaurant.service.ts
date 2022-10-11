import { Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { RestaurantSchema, Restaurant } from './schemas/res.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
mongoose.set('debug', true);

@Injectable()
export class RestaurantService {
    constructor(
        @InjectModel(Restaurant.name)
        private resModel: Model<Restaurant>
    ) { }

    async findAll(): Promise<Restaurant[]> {
        const results = await this.resModel.find();
        return results;
    }
    async create(res: Restaurant) {
        const result = await this.resModel.create(res);
        return result
    }
    async findById(_id: string): Promise<Restaurant> {
        try {
            const results = await this.resModel.findById({ _id }).exec();
            console.log("========= results ", results);
            if (!results) {
                console.log(" In throw");
                throw new HttpException('Forbidden', 403);
            }
            return results;
        } catch (e) {
            console.log("Exception e ", e);
            throw new NotFoundException("Not found restaurant.");
        }
    }
    async findByIdAndUpdate(_id: string, res: Restaurant): Promise<Restaurant> {
        console.log("== res ", res);
        const results = await this.resModel.findByIdAndUpdate({ _id }, res, { returnDocument: 'after' });
        console.log("Update ", results);
        return results;
    }

    async findByIdAndDelete(_id: string): Promise<Restaurant> {
        const results = await this.resModel.findOneAndDelete({ _id });
        console.log("findByIdAndDelete ", results);
        return results;
    }

}
