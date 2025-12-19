import { Injectable } from '@nestjs/common';
import { CreateBudgetStatusDto } from './dto/create-budget-status.dto';
import { UpdateBudgetStatusDto } from './dto/update-budget-status.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BudgetStatusService {
    constructor(private prisma: PrismaService) {}
  
  async create({description,name}: CreateBudgetStatusDto) {
    try {
      return await this.prisma.budgetStatus.create({data: {description,name}});
    } catch (error) {
        return {
          status: "ERROR",
          message: "Algo deu errado"
        }      
    }
  }

  async findAll() {
    try {
      return this.prisma.budgetStatus.findMany({
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
    try {
          return await this.prisma.budgetStatus.findFirst({
            include:{
              budgets:{
                include:{
                  type:true,
                  status:true
                }
              }
            },
          where:{
            id
          }

        });
    } catch (error) {
      
    }
  }

  async update(id: string, {description,name}: UpdateBudgetStatusDto) {
    return await this.prisma.budgetStatus.update({
      data: {description,name},
      where:{
        id
      }
    }) ;
  }
}
