import { Module } from '@nestjs/common';
import { BasespruebacionService } from './basespruebacion.service';
import { BasespruebacionController } from './basespruebacion.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BasespruebacionController],
  providers: [BasespruebacionService, PrismaService],
})
export class BasespruebacionModule {}
