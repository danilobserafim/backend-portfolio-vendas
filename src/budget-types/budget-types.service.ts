import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBudgetTypeDto } from './dto/create-budget-type.dto';
import { UpdateBudgetTypeDto } from './dto/update-budget-type.dto';

@Injectable()
export class BudgetTypesService {
  constructor(private prisma: PrismaService) {}
  create(createBudgetTypeDto: CreateBudgetTypeDto) {
    return 'This action adds a new budgetType';
  }

  async findAll() {
    return await this.prisma.projectTypes.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} budgetType`;
  }

  update(id: number, updateBudgetTypeDto: UpdateBudgetTypeDto) {
    return `This action updates a #${id} budgetType`;
  }

  remove(id: number) {
    return `This action removes a #${id} budgetType`;
  }
}
