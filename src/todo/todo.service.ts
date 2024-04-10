import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepositor: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<CreateTodoDto> {
    const created = await this.todoRepositor.save(createTodoDto);
    return created;
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepositor.find();
  }

  async findOne(id: string) {
    const todo_user = await this.todoRepositor.findOneBy({ id });
    return todo_user;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const updat_id = await this.todoRepositor.findOneBy({ id });
    if (!updat_id) {
      throw new NotFoundException();
    }
    Object.assign(updat_id, updateTodoDto);
    return await this.todoRepositor.save(updat_id);
  }

  async remove(id: string) {
    const updat_id = await this.todoRepositor.findOneBy({ id });
    if (!updat_id) {
      throw new NotFoundException();
    }
    return await this.todoRepositor.remove(updat_id);
  }
}
