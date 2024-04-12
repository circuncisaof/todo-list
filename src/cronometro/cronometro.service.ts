import { Injectable } from '@nestjs/common';
import { CreateCronometroDto } from './dto/create-cronometro.dto';
import { UpdateCronometroDto } from './dto/update-cronometro.dto';

@Injectable()
export class CronometroService {
  create(createCronometroDto: CreateCronometroDto) {
    return 'This action adds a new cronometro';
  }

  findAll() {
    return `This action returns all cronometro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cronometro`;
  }

  update(id: number, updateCronometroDto: UpdateCronometroDto) {
    return `This action updates a #${id} cronometro`;
  }

  remove(id: number) {
    return `This action removes a #${id} cronometro`;
  }
}
