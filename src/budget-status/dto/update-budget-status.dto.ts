import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetStatusDto } from './create-budget-status.dto';

export class UpdateBudgetStatusDto extends PartialType(CreateBudgetStatusDto) {
    name: string
    description: string
}
