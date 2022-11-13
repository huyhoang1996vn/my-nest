import { JwtModule } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { APIFeatures } from '../utils/apiFeature.utils';
import { AuthService } from './auth.service';
import { Role, User } from './schemas/auth.schemas';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let model: Model<User>;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtModule.register({
        secret: 'KLSDJF30945DJFDSK9345KJDFLKSD90485DSJFLKSDFJ349JFK',
        signOptions: { expiresIn: '1d' },
      })],
      providers: [AuthService, APIFeatures, { 
        provide: getModelToken(User.name), 
        useValue: Model  // <-- Use the Model Class from Mongoose
      },]
    }).compile();

    service = module.get<AuthService>(AuthService);
    model = module.get<Model<User>>(getModelToken(User.name));

  });

  const signUpDto = {
    _id: "string",
    name: "string",
    password: "string",
    email: "string",    
    role: Role.USER    
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('signUp', ()=>{
    it("signup user", ()=>{
      jest.spyOn(model, 'create').mockImplementationOnce(()=>Promise.resolve({}));
      jest.spyOn(bcrypt, 'hash').mockResolvedValueOnce('testHash');
      const result = service.signUp(signUpDto);
      expect(bcrypt.hash).toHaveBeenCalled();
    })
  })

  
});
