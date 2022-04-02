/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.article.deleteMany();
    await prisma.plans.deleteMany();
    await prisma.users.deleteMany();
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
            author: 'callisto',

        },
    });

    const firstUser = await prisma.users.create({
        data: {
            username: 'callisto',
            password: '123456',
        },
    });
    console.log({ firstArticle, firstPlan, firstUser });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
