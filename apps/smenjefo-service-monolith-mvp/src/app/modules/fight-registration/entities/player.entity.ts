import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  Generated,
} from 'typeorm';

import Team from './team.entity';

@Entity()
export default class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @Column('varchar', { length: 36 })
  entityId: string;

  @Column('varchar', { length: 20 })
  nickname: string;

  @ManyToOne(() => Team, (team) => team.players)
  @JoinTable()
  team: Team;
}
