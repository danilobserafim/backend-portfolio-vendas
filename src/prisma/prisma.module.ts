// prisma.module.ts (example of a module exporting PrismaService)
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Optional: if you want PrismaService to be available globally
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
