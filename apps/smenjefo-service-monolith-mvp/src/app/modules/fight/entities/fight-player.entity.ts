import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  ManyToOne,
  JoinTable,
} from 'typeorm';

import Round from './round.entity';

@Entity()
export default class FightPlayer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @Column('varchar', { length: 36 })
  entityId: string;

  @Column('varchar', { length: 20 })
  nickname: string;

  @Column('varchar', { length: 20 })
  role: string;

  @Column('tinyint')
  hp: number;

  @Column('tinyint')
  energy: number;

  @Column('varchar')
  avatarURL: string;

  @Column('varchar', { length: 36 })
  team: string;

  @Column('varchar', { length: 20 })
  status: string;

  @Column('varchar', { length: 20 })
  turnStatus: string;

  @ManyToOne(() => Round, (round) => round.players)
  @JoinTable()
  round: Round;
}
