import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) { }

  create(createPlanInput: CreatePlanInput) {
    return 'This action adds a new plan';
  }

  findAll() {
    return this.prisma.plans.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} plan`;
  }

  update(id: number, updatePlanInput: UpdatePlanInput) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
