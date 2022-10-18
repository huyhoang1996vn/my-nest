import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ default: true })
  isNew: boolean;

  @OneToMany(() => Page, (page) => page.book)
  pages: Page[]
}


@Entity()
export class Page {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => Books, (book) => book.pages)
    book: Books
}


@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}