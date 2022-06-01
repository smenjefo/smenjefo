import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';

import Application from './application.entity';

@Entity()
export default class FightTrigger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 36 })
  type: string;

  @ManyToOne(() => Application, (application) => application.fightTriggers)
  @JoinTable()
  application: Application;
}
