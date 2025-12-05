import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BudgetsController } from './budgets.controller';
import { BudgetsService } from './budgets.service';

@Module({
  controllers: [BudgetsController],
  providers: [BudgetsService],
  imports: [PrismaModule],
})
export class BudgetsModule {}
