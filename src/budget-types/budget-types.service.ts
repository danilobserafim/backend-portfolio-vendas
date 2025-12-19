import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBudgetTypeDto } from './dto/create-budget-type.dto';
import { UpdateBudgetTypeDto } from './dto/update-budget-type.dto';

@Injectable()
export class BudgetTypesService {
  constructor(private prisma: PrismaService) {}
  async create({description,value}: CreateBudgetTypeDto) {
    try {
      return await this.prisma.budgetTypes.create({
      data: {description,value}
    });
    } catch (error) {
      return {
        status: "ERROR",
        message:"Database error"
      }
    }
  }

  async findAll() {
    try {
      return await this.prisma.budgetTypes.findMany({
      include:{
        _count:true
      }
    });
    } catch (error) {
      return {
        status: "ERROR",
        message: "Database error"

      }
    }
  }

  async findOne(id: string) {
    return await this.prisma.budgetTypes.findFirst({
      where: {
        id
      },
      include:{
        budgets:true
      }
    });
  }

  async update(id: string, {description, value}: UpdateBudgetTypeDto) {
    return await this.prisma.budgetTypes.update({
      data: {description, value},
      where:{
        id
      }
    }) ;
  }
}
