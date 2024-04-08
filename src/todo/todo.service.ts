import { Injectable } from '@nestjs/common';
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
    console.log(created);
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
    const updat_todo = await this.todoRepositor.findOneBy({ id });
    
    return;
  }

  async remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
