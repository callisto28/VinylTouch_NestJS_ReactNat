import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlansService } from './plans.service';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';

@Resolver('Plan')
export class PlansResolver {
  constructor(private readonly plansService: PlansService) {}

  @Mutation('createPlan')
  create(@Args('createPlanInput') createPlanInput: CreatePlanInput) {
    return this.plansService.create(createPlanInput);
  }

  @Query('plans')
  findAll() {
    return this.plansService.findAll();
  }

  @Query('plan')
  findOne(@Args('id') id: number) {
    return this.plansService.findOne(id);
  }

  @Mutation('updatePlan')
  update(@Args('updatePlanInput') updatePlanInput: UpdatePlanInput) {
    return this.plansService.update(updatePlanInput.id, updatePlanInput);
  }

  @Mutation('removePlan')
  remove(@Args('id') id: number) {
    return this.plansService.remove(id);
  }
}
