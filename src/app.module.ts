
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [GraphQLModule.forRoot({
    playground:false,
    plugins:[ApolloServerPluginLandingPageLocalDefault()],
    typePaths: ['.src/**/*.graphql'],
  }), ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
