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
    if (created !== null && created !== undefined) {
      throw new Error('Nao pode estar nulo');
    }
    return created;
  }

  async findAll(): Promise<Todo[]> {
    const data = await this.todoRepositor.find();
    return data;
  }

  async findOne(id: string): Promise<Todo> {
    const todo_user = await this.todoRepositor.findOneBy({ id });
    if (!todo_user) {
      throw new Error('Todo not found');
    }
    return todo_user;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const updat_id = await this.todoRepositor.findOneBy({ id });
    if (!updat_id) {
      throw new NotFoundException(updat_id);
    }
    Object.assign(updat_id, updateTodoDto);
    return await this.todoRepositor.save(updat_id);
  }

  async remove(id: string) {
    const updat_id = await this.todoRepositor.findOneBy({ id });
    if (!updat_id) {
      throw new NotFoundException(updat_id);
    }
    return await this.todoRepositor.remove(updat_id);
  }
}
