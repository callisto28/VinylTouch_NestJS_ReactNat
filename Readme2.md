# Fonction de lancement de apollo

#### Permet de lancer la génération du fichier graphQL

```js
npm run gen-typings
```

- cette commande va venir mettre a jour donne fichier graphql.ts

####  Permet de lancer nestJs

```js
npm run start:dev
```

`Puis aller sur localhost:3000/graphql`

#### Pour la creation du resolver et du schema graphQl

- Cette commande va venir créer le répetoire avec :

  -module,

  -resolver,

  -service,

- nomdudossier.graphql

  ainsi que le rep dto et entities

```js
nest g resource "nom du dossier"

```

puis il faut faire un choix en ce qui concerne la creation sélectionner `GraphQL (schema first)`.
puis il répondre Y à la création du CRUD

#### Pour créer nos tables SQL

```js
npx prisma migrate dev --name init
```

- cette commande va nous permettre de venir créer nos tables sql "init" c'est pour notre première migration, l'idéal c'est de lui donnée le nom et un numéro afin d'avoir un historique pour savoir ce que fait cette migration.

on peut venir tester notre insertion en bdd en créant un fichier dans primsa exemple :

```js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.article.deleteMany();
  await prisma.plans.deleteMany();
  const firstArticle = await prisma.article.create({
    data: {
      title: 'First Article',
      description: 'This is the first article',
      content: 'This is the first article',
      author: 'callisto',
    },
  });
  const firstPlan = await prisma.plans.create({
    data: {
      title: 'First Plan',
      description: 'This is the first plan',
      image: 'firstImage',
      author: 'callisto',
    },
  });
  console.log({ firstArticle, firstPlan });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

puis on ajoute dans notre package.json juste avant le script

```json
"prisma": {
    "seed": "ts-node prisma/seed.ts"
  },
```

et on va pouvoir venir tester l'analyse de nos schéma en utilisant la commande suivante

```md
npx prisma generate
```

#### Création de notre service prisma

-Dans le rep Prisma on vient ajouter le fichier prisma.service.ts avec ce qui suit trouvé dans la doc

```js
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  async enableShutdownHook(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
```

#### Tips qui permet de pouvoir lancer plusieurs commande en meme temps

```json
    "dev": "concurrently \"npm:start:dev\" \"npm:gen-typings\" \"npm:prisma:generate\"",
    "gen-typings": "ts-node src/generate-typings",
    "start:dev": "nest start --watch",
    "prisma:generate": "prisma generate --watch",
```

Afin de lancer `npm run dev`
on configure la ligne "dev" en oubliant pas d'installer le module `npm i -D concurrently`
