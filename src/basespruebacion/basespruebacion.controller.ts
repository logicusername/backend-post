import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasespruebacionService } from './basespruebacion.service';
import { CreateBasespruebacionDto } from './dto/create-basespruebacion.dto';
import { UpdateBasespruebacionDto } from './dto/update-basespruebacion.dto';

@Controller('basespruebacion')
export class BasespruebacionController {
  constructor(private readonly basespruebacionService: BasespruebacionService) {}

  @Post()
  create(@Body() createBasespruebacionDto: CreateBasespruebacionDto) {
    return this.basespruebacionService.create(createBasespruebacionDto);
  }

  @Get()
  findAll() {
    return this.basespruebacionService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.basespruebacionService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBasespruebacionDto: UpdateBasespruebacionDto) {
  //   return this.basespruebacionService.update(+id, updateBasespruebacionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.basespruebacionService.remove(+id);
  // }
}
