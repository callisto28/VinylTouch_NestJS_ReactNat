import { CreatePlanInput } from './create-plan.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePlanInput extends PartialType(CreatePlanInput) {
  id: number;
}
