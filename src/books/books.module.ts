import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books, Page } from './books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Books, Page])],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
