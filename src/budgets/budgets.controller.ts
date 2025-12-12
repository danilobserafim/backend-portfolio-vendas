import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post()
  create(
    @Body() { descricao, email, nome, tipoProjeto, typeId }: CreateBudgetDto,
  ) {
    return this.budgetsService.create({
      descricao,
      email,
      nome,
      tipoProjeto,
      typeId,
    });
  }

  @Get()
  findAll() {
    return this.budgetsService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.budgetsService.findOne(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetsService.update(id, updateBudgetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetsService.remove(id);
  }
}
