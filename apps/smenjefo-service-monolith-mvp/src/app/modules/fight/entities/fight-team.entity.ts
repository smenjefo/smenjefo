import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';

import Fight from './fight.entity';

@Entity()
export default class FightTeam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 36 })
  teamId: string;

  @ManyToOne(() => Fight, (fight) => fight.teams)
  @JoinTable()
  fight: Fight;
}
