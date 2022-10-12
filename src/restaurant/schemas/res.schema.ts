import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Schema as mongooseSchema }  from 'mongoose';


// export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  // Ref: https://stackoverflow.com/questions/45952928/mongodb-error-document-must-have-an-id-before-saving
  _id: mongooseSchema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  email: string;

  @Prop()
  image: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);