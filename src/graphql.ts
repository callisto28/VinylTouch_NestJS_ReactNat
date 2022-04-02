
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateArticleInput {
    title: string;
    description: string;
    content?: Nullable<string>;
    image?: Nullable<string>;
    createdAt: DateTime;
    author: string;
}

export class UpdateArticleInput {
    id: number;
}

export class CreatePlanInput {
    title: string;
    description: string;
    image?: Nullable<string>;
    createdAt: DateTime;
    author: string;
}

export class UpdatePlanInput {
    id: number;
}

export class CreateUserInput {
    username: string;
    password: string;
}

export class UpdateUserInput {
    id: number;
}

export class Article {
    id: number;
    title: string;
    description: string;
    content?: Nullable<string>;
    image?: Nullable<string>;
    createdAt: DateTime;
    author: string;
}

export abstract class IQuery {
    abstract articles(): Nullable<Article>[] | Promise<Nullable<Article>[]>;

    abstract article(id: number): Nullable<Article> | Promise<Nullable<Article>>;

    abstract plans(): Nullable<Plan>[] | Promise<Nullable<Plan>[]>;

    abstract plan(id: number): Nullable<Plan> | Promise<Nullable<Plan>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createArticle(createArticleInput: CreateArticleInput): Article | Promise<Article>;

    abstract updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;

    abstract removeArticle(id: number): Nullable<Article> | Promise<Nullable<Article>>;

    abstract createPlan(createPlanInput: CreatePlanInput): Plan | Promise<Plan>;

    abstract updatePlan(updatePlanInput: UpdatePlanInput): Plan | Promise<Plan>;

    abstract removePlan(id: number): Nullable<Plan> | Promise<Nullable<Plan>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Plan {
    id: number;
    title: string;
    description: string;
    image?: Nullable<string>;
    createdAt: DateTime;
    author: string;
}

export class User {
    id: number;
    username: string;
    password: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
