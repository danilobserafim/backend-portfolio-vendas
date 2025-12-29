import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Injectable()
export class BudgetsService {
  constructor(private prisma: PrismaService) {}
  async create({ descricao, email, nome, typeId, statusId }: CreateBudgetDto) {
    try {
      return await this.prisma.budgets.create({
        data: { descricao, email, nome, typeId, statusId },
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
      return await this.prisma.budgets.findMany({
        include: {
          type: true,
          status: true,
        },
      });
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
        include: { type: true, status: true },
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
  async findLike(search: string) {
    try {
      return await this.prisma.budgets.findMany({
        include: { type: true, status: true },
        where: {
          OR: [
            { nome: { contains: search } },
            { email: { startsWith: search } },
            { descricao: { contains: search } },
          ],
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

  updateStatus(id: string, statusId: any) {
    try {
      return this.prisma.budgets.update({
        data: {
          statusId,
        },
        where: {
          id,
        },
      });
    } catch (error) {
      return {
        status: 'ERROR',
        message: 'Something went worng!',
      };
    }
  }

  async remove(id: string) {
    return await this.prisma.budgets.delete({
      where: { id },
    });
  }
}
