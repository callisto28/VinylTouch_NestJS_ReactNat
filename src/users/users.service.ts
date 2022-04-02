import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  users: any;
  constructor(private prisma: PrismaService) { }

  create(createUserInput: CreateUserInput) {
    const user = this.prisma.users.create({
      data: {
        username: createUserInput.username,
        password: createUserInput.password,
      },
    });
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(username: string) {
    return this.prisma.users.findUnique({
      where: {
        username,
      },
    });
  }

  remove(username: string) {
    return `This action removes a #${username} user`;
  }
}
