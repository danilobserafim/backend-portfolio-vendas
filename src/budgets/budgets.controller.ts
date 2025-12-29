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
    @Body() { descricao, email, nome, typeId, statusId }: CreateBudgetDto,
  ) {
    return this.budgetsService.create({
      descricao,
      email,
      nome,
      typeId,
      statusId,
    });
  }

  @Get()
  findAll() {
    return this.budgetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetsService.findOne(id);
  }

  @Get('like/:search')
  findLike(@Param('search') search: string) {
    return this.budgetsService.findLike(search);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetsService.update(id, updateBudgetDto);
  }
  @Patch('status/:id')
  updateStatus(
    @Param('id') id: string,
    @Body() { statusId }: { statusId: string },
  ) {
    return this.budgetsService.updateStatus(id, statusId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetsService.remove(id);
  }
}
