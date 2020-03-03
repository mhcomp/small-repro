import { EntityRepository, Repository } from 'typeorm';

import { Node } from '../entities/node.entity';

@EntityRepository(Node)
export class NodeRepository extends Repository<Node> {}
