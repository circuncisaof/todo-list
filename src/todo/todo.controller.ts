import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async create(
    @Res() response: Response,
    @Body() createTodoDto: CreateTodoDto,
  ) {
    try {
      const data = await this.todoService.create(createTodoDto);
      const info = response.json({ data });
      const res = response.status;
      if (data === null) {
        throw new Error('Nao pode estar nulo');
      }
      return {
        info,
        res,
      };
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll(@Res() response: Response) {
    const alLTodo = await this.todoService.findAll();
    return response.status(201).json(alLTodo);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.todoService.findOne(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    try {
      return this.todoService.update(id, updateTodoDto);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.todoService.remove(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
}
