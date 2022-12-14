import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from './auth/roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Books } from './books/books.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

console.log("== __dirname ", __dirname);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.production',],
      isGlobal: true
    }), 
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'nestjs',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   // entities: [Books],
    //   synchronize: true,
    // }),
    MongooseModule.forRoot(process.env.DATABASE_HOST), 
    RestaurantModule, 
    AuthModule, 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    })
    // BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
