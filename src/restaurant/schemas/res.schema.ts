import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Schema as mongooseSchema }  from 'mongoose';
import { User } from 'src/auth/schemas/auth.schemas';


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

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'},)
  // Ref: https://mongoosejs.com/docs/populate.html
  user: User
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);