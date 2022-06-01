import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  Generated,
  OneToMany,
  Unique,
} from 'typeorm';
import FightPlayer from './fight-player.entity';

import Fight from './fight.entity';
import Turn from './turn.entity';
import History from './history.entity';

@Entity()
@Unique('my_unique_constraint', ['uuid'])
export default class Round {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Generated("uuid")
  uuid: string;

  @ManyToOne(() => Fight, (fight) => fight.rounds)
  @JoinTable()
  fight: Fight;

  @Column('varchar', { length: 36 })
  nextRoundId: string;

  @Column('varchar')
  createdAt: string;

  @Column('tinyint')
  number: number;

  @Column('varchar')
  endsAt: string;

  @OneToMany(() => Turn, (turn) => turn.round, { cascade: ['insert', 'update'] })
  turns: Turn[];

  @OneToMany(() => FightPlayer, (fightPlayer) => fightPlayer.round, { cascade: ['insert', 'update'] })
  players: FightPlayer[];

  @OneToMany(() => History, (history) => history.round, { cascade: ['insert', 'update'] })
  history: History[];
}
