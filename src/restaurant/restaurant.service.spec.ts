import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/res.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BadGatewayException, BadRequestException, NotFoundException } from '@nestjs/common';

// https://stackoverflow.com/questions/55143467/testing-mongoose-models-with-nestjs
describe('RestaurantService', () => {
  let service: RestaurantService;
  let model: Model<Restaurant>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ 
        RestaurantService,
        { 
        provide: getModelToken(Restaurant.name), 
        useValue: Model  // <-- Use the Model Class from Mongoose
      },],
    }).compile();

    service = module.get<RestaurantService>(RestaurantService);
    model =  module.get<Model<Restaurant>>(getModelToken(Restaurant.name));

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  
  describe('findById', () => {
    const mockRes = {
      id: "63562905aa2f513254a4631e",
      name: "vip  1",
      address: "Da Nang",
      email: "email2@gamil.com",
      user: "635628daaa2f513254a4631a",
    }
    it('findById', async () => {
      jest.spyOn(model, 'findById').mockReturnValueOnce(mockRes as any);
      const result = await service.findById(mockRes.id);
      expect(result).toEqual(mockRes);
    });

    it("throw excption",async () => {
      jest.spyOn(model, 'findById').mockReturnValueOnce(null);
      expect(service.findById("not found")).rejects.toThrow(NotFoundException);
    })
    it("throw excption in model",async () => {
      jest.spyOn(model, 'findById').mockRejectedValueOnce(new NotFoundException("Not found restaurant."));
      expect(service.findById("not found")).rejects.toThrow(NotFoundException);
    })
  });
});
