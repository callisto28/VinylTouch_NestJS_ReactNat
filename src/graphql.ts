
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateArticleInput {
    exampleField?: Nullable<number>;
}

export class UpdateArticleInput {
    id: number;
}

export class Article {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract articles(): Nullable<Article>[] | Promise<Nullable<Article>[]>;

    abstract article(id: number): Nullable<Article> | Promise<Nullable<Article>>;
}

export abstract class IMutation {
    abstract createArticle(createArticleInput: CreateArticleInput): Article | Promise<Article>;

    abstract updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;

    abstract removeArticle(id: number): Nullable<Article> | Promise<Nullable<Article>>;
}

type Nullable<T> = T | null;
