import { Injectable } from '@nestjs/common';
import { CreateBasespruebacionDto } from './dto/create-basespruebacion.dto';
import { UpdateBasespruebacionDto } from './dto/update-basespruebacion.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BasespruebacionService {

  constructor(private prisma: PrismaService) {}

  create(createBasespruebacionDto: CreateBasespruebacionDto) {
    return this.prisma.comentario.create({ data: createBasespruebacionDto});
  }

  findAll() {
    return this.prisma.comentario.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} basespruebacion`;
  // }

  // update(id: number, updateBasespruebacionDto: UpdateBasespruebacionDto) {
  //   return `This action updates a #${id} basespruebacion`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} basespruebacion`;
  // }
}
