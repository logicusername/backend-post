import { PartialType } from '@nestjs/mapped-types';
import { CreateBasespruebacionDto } from './create-basespruebacion.dto';

export class UpdateBasespruebacionDto extends PartialType(CreateBasespruebacionDto) {}
