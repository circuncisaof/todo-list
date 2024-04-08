export class CreateTodoDto {
  readonly id?: string;
  readonly todo: string;
  readonly checked?: boolean;
  readonly createAt?: string;
  readonly updateAt?: string;
}
