import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  readonly id?: string;
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsString()
  readonly todo: string;
  readonly checked?: boolean;
  readonly createAt?: string;
  readonly updateAt?: string;
}
