import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetsModule } from './budgets/budgets.module';
import { PrismaService } from './prisma/prisma.service';
import { BudgetTypesModule } from './budget-types/budget-types.module';
import { BudgetStatusModule } from './budget-status/budget-status.module';

@Module({
  imports: [
    BudgetsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    BudgetTypesModule,
    BudgetStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
