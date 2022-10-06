import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  address: number;

  @Prop()
  email: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);