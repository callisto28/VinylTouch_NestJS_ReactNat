import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) { }

  create(createArticleInput: CreateArticleInput) {
    return 'This action adds a new article';
  }

  findAll() {
    return this.prisma.article.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleInput: UpdateArticleInput) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
