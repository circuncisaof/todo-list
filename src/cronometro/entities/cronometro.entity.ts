import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'todo_timer' })
export class Cronometro {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'todo', nullable: false })
  todo: string;

  @Column({ name: 'timer', nullable: false })
  timer: string;
  @Column({ name: 'checked', nullable: true })
  checked: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: string;
}
