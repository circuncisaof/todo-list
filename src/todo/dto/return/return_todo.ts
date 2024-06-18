import { Todo } from 'src/todo/entities/todo.entity';

export class ReturnTodo {
  todo: string;
  constructor(todo_ent: Todo) {
    this.todo = todo_ent.todo;
  }
}
