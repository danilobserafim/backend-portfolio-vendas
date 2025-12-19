import { Module } from '@nestjs/common';
import { BudgetStatusService } from './budget-status.service';
import { BudgetStatusController } from './budget-status.controller';

@Module({
  controllers: [BudgetStatusController],
  providers: [BudgetStatusService],
})
export class BudgetStatusModule {}
