import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Graph } from './graph.entity';

@Entity()
export class Node extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @PrimaryColumn()
  public graphId: string;

  @ManyToOne(
    () => Graph,
    graph => graph.id,
  )
  @JoinColumn({ name: 'graphId' })
  public graph: Graph;
}
