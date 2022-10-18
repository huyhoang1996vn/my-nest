import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Books, Page } from './books.entity';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Books)
        private booksRepository: Repository<Books>,

        @InjectRepository(Page)
        private pageRepository: Repository<Page>,
    ){

    }

    create(data): Promise<Books>{
        const book = this.booksRepository.create({
            name: data.name,
            price: data.price,
            isNew: data.isNew,
        })
        return this.booksRepository.save(book)
    }

    getAll(): Promise<Books[]>{
        // return this.booksRepository.find();
        return this.booksRepository.createQueryBuilder("books").getMany();
    }

    getById(id: string): Promise<Books>{
        // return this.booksRepository.findOne();
        return this.booksRepository.createQueryBuilder("books").where("books.id = :id", {id: id}).getOne();
    }

    createPage(data): Promise<Page>{
        const book = new Books();
        book.id = 1
        const page = this.pageRepository.create({
            name: data.name,
            book: book,
        })
        return this.pageRepository.save(page);
    }
}
