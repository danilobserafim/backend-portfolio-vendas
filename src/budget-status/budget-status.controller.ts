import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetStatusService } from './budget-status.service';
import { CreateBudgetStatusDto } from './dto/create-budget-status.dto';
import { UpdateBudgetStatusDto } from './dto/update-budget-status.dto';

@Controller('budget-status')
export class BudgetStatusController {
  constructor(private readonly budgetStatusService: BudgetStatusService) {}

  @Post()
  create(@Body() {description,name}: CreateBudgetStatusDto) {
    return this.budgetStatusService.create({description,name});
  }

  @Get()
  findAll() {
    return this.budgetStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetStatusService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() {description,name}: UpdateBudgetStatusDto) {
    return this.budgetStatusService.update(id, {description,name});
  }
}
