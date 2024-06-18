import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateTodoDto } from './dto/create-todo.dto';
import { FilterTasks } from './dto/filter.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async create(@Res() res: Response, @Body() createTodoDto: CreateTodoDto) {
    const data = await this.todoService.create(createTodoDto);

    throw new HttpException(data, HttpStatus.ACCEPTED);
  }

  @Get()
  async findAll(@Res() response: Response) {
    const alLTodo = await this.todoService.findAll();
    return response.status(201).json(alLTodo);
  }

  @Get('filter')
  async filter(@Query() filterTasks: FilterTasks): Promise<Todo[]> {
    console.log(filterTasks);
    if (Object.keys(filterTasks).length) {
      return await this.todoService.filter(filterTasks);
    } else {
      this.todoService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!id) {
      throw new NotFoundException('Not found');
    }
    return this.todoService.findOne(id);
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
