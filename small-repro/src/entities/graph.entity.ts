import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Node } from './node.entity';

@Entity()
export class Graph extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ nullable: true })
  public startNodeId?: string;

  @ManyToOne(
    () => Node,
    node => node.id,
  )
  @JoinColumn({ name: 'startNodeId' })
  public node: Node;
}
