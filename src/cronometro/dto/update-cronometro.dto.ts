import { PartialType } from '@nestjs/mapped-types';
import { CreateCronometroDto } from './create-cronometro.dto';

export class UpdateCronometroDto extends PartialType(CreateCronometroDto) {}
