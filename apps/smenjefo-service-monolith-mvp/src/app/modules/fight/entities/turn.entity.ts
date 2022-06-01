import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';

import Round from './round.entity';

@Entity()
export default class Turn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 20 })
  turnType: string;

  @Column('varchar', { length: 36 })
  initiatorId: string;

  @Column('varchar', { length: 36 })
  targetId: string;

  @ManyToOne(() => Round, (round) => round.turns)
  @JoinTable()
  round: Round;
}
