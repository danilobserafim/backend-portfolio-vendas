import { Injectable } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMariaDb({
      host: 'db4free.net',
      port: 3306,
      connectionLimit: 5,
      user: 'danilobserafim',
      password: 'senha1973',
      database: 'barfim_ecommerce',
    });

    super({ adapter });
  }
}
