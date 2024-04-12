import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CronometroService } from './cronometro.service';
import { CreateCronometroDto } from './dto/create-cronometro.dto';
import { UpdateCronometroDto } from './dto/update-cronometro.dto';

@Controller('cronometro')
export class CronometroController {
  constructor(private readonly cronometroService: CronometroService) {}

  @Post()
  create(@Body() createCronometroDto: CreateCronometroDto) {
    return this.cronometroService.create(createCronometroDto);
  }

  @Get()
  findAll() {
    return this.cronometroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cronometroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCronometroDto: UpdateCronometroDto) {
    return this.cronometroService.update(+id, updateCronometroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cronometroService.remove(+id);
  }
}
