import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  ManyToOne,
  JoinTable,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import HistoryRecordPlayer from './history-record-player.entity';
import Round from './round.entity';

@Entity()
export default class History {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @Column('varchar', { length: 20 })
  turnDirection: string;

  @OneToMany(() => HistoryRecordPlayer, (historyRecordPlayer) => historyRecordPlayer.history, { cascade: ['insert', 'update'] })
  @JoinColumn()
  historyRecordPlayers: HistoryRecordPlayer[];

  @ManyToOne(() => Round, (round) => round.history)
  @JoinTable()
  round: Round;
}
