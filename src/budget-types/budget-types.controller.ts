import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetTypesService } from './budget-types.service';
import { CreateBudgetTypeDto } from './dto/create-budget-type.dto';
import { UpdateBudgetTypeDto } from './dto/update-budget-type.dto';

@Controller('budget-types')
export class BudgetTypesController {
  constructor(private readonly budgetTypesService: BudgetTypesService) {}

  @Post()
  create(@Body() createBudgetTypeDto: CreateBudgetTypeDto) {
    return this.budgetTypesService.create(createBudgetTypeDto);
  }

  @Get()
  findAll() {
    return this.budgetTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetTypesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetTypeDto: UpdateBudgetTypeDto) {
    return this.budgetTypesService.update(id, updateBudgetTypeDto);
  }
}
