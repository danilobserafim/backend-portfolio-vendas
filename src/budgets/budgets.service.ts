import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Injectable()
export class BudgetsService {
  constructor(private prisma: PrismaService) {}
  async create({ descricao, email, nome, tipoProjeto }: CreateBudgetDto) {
    try {
      return await this.prisma.budgets.create({
        data: { descricao, email, nome, tipoProjeto },
      });
    } catch (error) {
      return {
        title: 'ERROR',
        message: 'Database error',
      };
    }
  }

  async findAll() {
    try {
      return await this.prisma.budgets.findMany();
    } catch (error) {
      return {
        title: 'ERROR',
        message: 'Database error',
      };
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.budgets.findFirst({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return {
        title: 'ERROR',
        message: 'Database error',
      };
    }
  }

  update(id: string, updateBudgetDto: UpdateBudgetDto) {
    return `This action updates a #${id} budget`;
  }

  async remove(id: string) {
    return await this.prisma.budgets.delete({
      where: { id },
    });
  }
}
