import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorator/user.decorator';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(
        private booksService: BooksService,
    ){}

    @Post()
    async create(
        @Body() body,
        @CurrentUser() user
    ){
        console.log("====== user ", user);
        console.log("LOGGER body ", body);
        return this.booksService.create(body)
    }

    @Get()
    async getAll() {
        return this.booksService.getAll();
    }

    @Get(":id")
    async getById(
        @Param() param,
    ) {
        console.log("=== param ", param);
        
        return this.booksService.getById(param.id);
    }

    @Post("page")
    async createPage(
        @Body() body,
        @CurrentUser() user
    ){
        console.log("====== user ", user);
        console.log("LOGGER body ", body);
        return this.booksService.createPage(body)
    }
}
