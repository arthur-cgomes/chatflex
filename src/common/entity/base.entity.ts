import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseCollection extends BaseEntity {
  @ApiProperty({ type: String })
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @ApiProperty({ type: Date })
  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: string;

  @ApiProperty({ type: Date })
  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: string;

  @Column({ type: 'bool', name: 'active', default: true })
  active: boolean;
}
