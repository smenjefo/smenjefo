import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';

import Application from './application.entity';
import Player from './player.entity';

@Entity()
export default class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @ManyToOne(() => Application, (application) => application.teams)
  @JoinTable()
  application: Application;

  @OneToMany(() => Player, (player) => player.team, { cascade: ['insert', 'update', 'remove'] })
  players: Player[];
}
