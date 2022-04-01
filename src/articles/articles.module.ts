import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesResolver } from './articles.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [PrismaService, ArticlesResolver, ArticlesService],
})
export class ArticlesModule { }
