import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  JoinTable,
  ManyToOne,
} from 'typeorm';

import History from './history.entity';

@Entity()
export default class HistoryRecordPlayer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @Column('varchar', { length: 20 })
  role: string;

  @Column('varchar', { length: 20 })
  nickname: string;

  @Column('varchar', { length: 20 })
  turnType: string;

  @Column('varchar', { length: 4 })
  changedHP: string;

  @Column('varchar', { length: 4 })
  changedEnergy: string;

  @ManyToOne(() => History, (history) => history.historyRecordPlayers)
  @JoinTable()
  history: History;
}
