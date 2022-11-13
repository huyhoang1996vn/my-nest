import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/res.schema';

describe('RestaurantController', () => {
  let controller: RestaurantController;
  let service: RestaurantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantController],
      providers: [RestaurantService],
    }).compile();

    controller = module.get<RestaurantController>(RestaurantController);
    service = module.get<RestaurantService>(RestaurantService);
  });

  describe('findById', () => {
    it('should return an array of cats', async () => {
      const result = new Restaurant();
      jest.spyOn(service, 'findById').mockResolvedValue(result);
      expect(await controller.findOne({id: "1"})).toBe(result);
    });
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
